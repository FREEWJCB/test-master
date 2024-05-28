import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import type { AxiosResponse } from 'axios';

@Injectable()
export class RequestService {
  constructor(public readonly httpService: HttpService) {}

  public async getResponse<T>(
    request: Observable<AxiosResponse<T>>,
  ): Promise<T> {
    return (await firstValueFrom(request)).data;
  }
}
