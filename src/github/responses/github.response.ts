import { ApiProperty } from '@nestjs/swagger';
import { GithubOwnerResponse } from './owner.response';
import { GithubLicenseResponse } from './license.response';

export class GithubRepoResponse {
  @ApiProperty({ description: 'The repository id', example: 1296269 })
  public id!: number;

  @ApiProperty({
    description: 'The repository node_id',
    example: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
  })
  public node_id!: string;

  @ApiProperty({ description: 'The repository name', example: 'Hello-World' })
  public name!: string;

  @ApiProperty({
    description: 'The repository full_name',
    example: 'octocat/Hello-World',
  })
  public full_name!: string;

  @ApiProperty({ description: 'The repository private', example: false })
  public private!: boolean;

  @ApiProperty({
    description: 'The repository owner',
    type: GithubOwnerResponse,
  })
  public owner!: GithubOwnerResponse;

  @ApiProperty({
    description: 'The repository html_url',
    example: 'https://github.com/octocat/Hello-World',
  })
  public html_url!: string;

  // Propiedades adicionales que faltan en tu código actual
  @ApiProperty({
    description: 'The repository description',
    example: 'This your first repo',
  })
  public description!: string;

  @ApiProperty({
    description: 'The repository url',
    example: 'https://api.github.com/repos/octocat/Hello-World',
  })
  public url!: string;

  @ApiProperty({
    description: 'The repository created_at',
    example: '2011-01-26T19:01:12Z',
  })
  public created_at!: string;

  @ApiProperty({
    description: 'The repository updated_at',
    example: '2011-01-26T19:14:43Z',
  })
  public updated_at!: string;

  @ApiProperty({
    description: 'The repository pushed_at',
    example: '2011-01-26T19:06:43Z',
  })
  public pushed_at!: string;

  @ApiProperty({
    description: 'The repository git_url',
    example: 'git://github.com/octocat/Hello-World.git',
  })
  public git_url!: string;

  @ApiProperty({
    description: 'The repository ssh_url',
    example: 'git@github.com:octocat/Hello-World.git',
  })
  public ssh_url!: string;

  @ApiProperty({
    description: 'The repository clone_url',
    example: 'https://github.com/octocat/Hello-World.git',
  })
  public clone_url!: string;

  @ApiProperty({
    description: 'The repository svn_url',
    example: 'https://svn.github.com/octocat/Hello-World',
  })
  public svn_url!: string;

  @ApiProperty({
    description: 'The repository homepage',
    example: 'https://github.com',
  })
  public homepage!: string;

  @ApiProperty({ description: 'The repository size', example: 108 })
  public size!: number;

  @ApiProperty({ description: 'The repository stargazers_count', example: 80 })
  public stargazers_count!: number;

  @ApiProperty({ description: 'The repository watchers_count', example: 80 })
  public watchers_count!: number;

  @ApiProperty({ description: 'The repository language', example: 'C' })
  public language!: string;

  @ApiProperty({ description: 'The repository has_issues', example: true })
  public has_issues!: boolean;

  @ApiProperty({ description: 'The repository has_projects', example: true })
  public has_projects!: boolean;

  @ApiProperty({ description: 'The repository has_downloads', example: true })
  public has_downloads!: boolean;

  @ApiProperty({ description: 'The repository has_wiki', example: true })
  public has_wiki!: boolean;

  @ApiProperty({ description: 'The repository has_pages', example: false })
  public has_pages!: boolean;

  @ApiProperty({ description: 'The repository forks_count', example: 9 })
  public forks_count!: number;

  @ApiProperty({
    description: 'The repository mirror_url',
    example: 'https://github.com/octocat/Hello-World',
  })
  public mirror_url!: string;

  @ApiProperty({ description: 'The repository archived', example: false })
  public archived!: boolean;

  @ApiProperty({ description: 'The repository disabled', example: false })
  public disabled!: boolean;

  @ApiProperty({ description: 'The repository open_issues_count', example: 0 })
  public open_issues_count!: number;

  @ApiProperty({
    description: 'The repository license',
    type: GithubLicenseResponse,
  })
  public license!: GithubLicenseResponse;

  @ApiProperty({ description: 'The repository forks', example: 1 })
  public forks!: number;

  @ApiProperty({ description: 'The repository open_issues', example: 1 })
  public open_issues!: number;

  @ApiProperty({ description: 'The repository watchers', example: 1 })
  public watchers!: number;

  @ApiProperty({
    description: 'The repository default_branch',
    example: 'master',
  })
  public default_branch!: string;
}
