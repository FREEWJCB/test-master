import { HttpStatus, Injectable } from '@nestjs/common';
import type { AxiosRequestConfig } from 'axios';
import { GithubRepoResponse } from '../responses/github.response';
import { ListUserReposDto } from '../dtos/list.user.repos.dto';
import { RequestService } from '../request.service';
import { encodeParams } from '../../tools/query.string.converter';

export function getGithubApiConfig(): AxiosRequestConfig {
  return {
    baseURL: process.env['GITHUB_URL'],
    validateStatus: (status: number) => [HttpStatus.OK].includes(status),
  };
}

@Injectable()
export class GithubService {
  constructor(private readonly requestService: RequestService) {}

  public async lists(query: ListUserReposDto): Promise<GithubRepoResponse[]> {
    const params = encodeParams({ ...query });
    const repositories = await this.requestService.getResponse<
      GithubRepoResponse[]
    >(
      this.requestService.httpService.get(
        `/users/google/repos?${params}`,
        getGithubApiConfig(),
      ),
    );

    return repositories
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10);
  }
}
