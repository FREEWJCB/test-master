import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class ListUserReposDto {
  @IsOptional()
  @IsString()
  type?: 'all' | 'owner' | 'member';

  @IsOptional()
  @IsString()
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';

  @IsOptional()
  @IsString()
  direction?: 'asc' | 'desc';

  @IsOptional()
  @IsBoolean()
  per_page?: number;

  @IsOptional()
  @IsNumber()
  page?: number;
}
