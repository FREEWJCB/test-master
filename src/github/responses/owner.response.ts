import { ApiProperty } from '@nestjs/swagger';

export class GithubOwnerResponse {
  @ApiProperty({
    description: 'The owner login',
    example: 'octocat',
  })
  public login!: string;

  @ApiProperty({
    description: 'The owner id',
    example: 1,
  })
  public id!: number;

  @ApiProperty({
    description: 'The owner node_id',
    example: 'MDQ6VXNlcjE=',
  })
  public node_id!: string;

  @ApiProperty({
    description: 'The owner avatar_url',
    example: 'https://github.com/images/error/octocat_happy.gif',
  })
  public avatar_url!: string;

  @ApiProperty({
    description: 'The owner gravatar_id',
    example: '',
  })
  public gravatar_id!: string;

  @ApiProperty({
    description: 'The owner url',
    example: 'https://api.github.com/users/octocat',
  })
  public url!: string;

  @ApiProperty({
    description: 'The owner html_url',
    example: 'https://github.com/octocat',
  })
  public html_url!: string;

  @ApiProperty({
    description: 'The owner followers_url',
    example: 'https://api.github.com/users/octocat/followers',
  })
  public followers_url!: string;

  @ApiProperty({
    description: 'The owner following_url',
    example: 'https://api.github.com/users/octocat/following{/other_user}',
  })
  public following_url!: string;

  @ApiProperty({
    description: 'The owner gists_url',
    example: 'https://api.github.com/users/octocat/gists{/gist_id}',
  })
  public gists_url!: string;

  @ApiProperty({
    description: 'The owner starred_url',
    example: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  })
  public starred_url!: string;

  @ApiProperty({
    description: 'The owner subscriptions_url',
    example: 'https://api.github.com/users/octocat/subscriptions',
  })
  public subscriptions_url!: string;

  @ApiProperty({
    description: 'The owner organizations_url',
    example: 'https://api.github.com/users/octocat/orgs',
  })
  public organizations_url!: string;

  @ApiProperty({
    description: 'The owner repos_url',
    example: 'https://api.github.com/users/octocat/repos',
  })
  public repos_url!: string;

  @ApiProperty({
    description: 'The owner events_url',
    example: 'https://api.github.com/users/octocat/events{/privacy}',
  })
  public events_url!: string;

  @ApiProperty({
    description: 'The owner received_events_url',
    example: 'https://api.github.com/users/octocat/received_events',
  })
  public received_events_url!: string;

  @ApiProperty({
    description: 'The owner type',
    example: 'User',
  })
  public type!: string;

  @ApiProperty({
    description: 'The owner site_admin',
    example: false,
  })
  public site_admin!: boolean;
}
