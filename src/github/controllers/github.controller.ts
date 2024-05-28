import { Controller, HttpStatus, Res, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import type { Response } from 'express';
import { GithubService } from '../services/github.service';
import { ListUserReposDto } from '../dtos/list.user.repos.dto';
import { GithubRepoResponse } from '../responses/github.response';

@Controller('/github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  @ApiOperation({
    summary: 'list of repositories',
    description: 'list of repositories',
  })
  @ApiOkResponse({
    description: 'The repositories record',
    type: GithubRepoResponse,
  })
  public async index(
    @Query() query: ListUserReposDto,
    @Res() response: Response,
  ): Promise<Response> {
    return response
      .status(HttpStatus.OK)
      .json(await this.githubService.lists(query));
  }
}
