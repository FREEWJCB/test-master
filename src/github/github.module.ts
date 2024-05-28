import { Module } from '@nestjs/common';
import { GithubService } from './services/github.service';
import { GithubController } from './controllers/github.controller';
import { RequestService } from './request.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GithubService, RequestService],
  controllers: [GithubController],
})
export class GithubModule {}
