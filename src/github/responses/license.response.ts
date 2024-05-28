import { ApiProperty } from '@nestjs/swagger';

export class GithubLicenseResponse {
  @ApiProperty({ description: 'The license key', example: 'mit' })
  public key!: string;

  @ApiProperty({ description: 'The license name', example: 'MIT License' })
  public name!: string;

  @ApiProperty({ description: 'The license spdx_id', example: 'MIT' })
  public spdx_id!: string;

  @ApiProperty({
    description: 'The license url',
    example: 'https://api.github.com/licenses/mit',
  })
  public url!: string;

  @ApiProperty({
    description: 'The license node_id',
    example: 'MDc6TGljZW5zZTEz',
  })
  public node_id!: string;

  @ApiProperty({
    description: 'The license html_url',
    example: 'https://github.com/licenses/mit',
  })
  public html_url!: string;

  @ApiProperty({
    description: 'The license description',
    example:
      'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
  })
  public description!: string;

  @ApiProperty({
    description: 'The license implementation',
    example:
      'Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file.',
  })
  public implementation!: string;

  @ApiProperty({
    description: 'The license permissions',
    example: ['commercial-use', 'modifications', 'distribution', 'private-use'],
  })
  public permissions!: string[];

  @ApiProperty({
    description: 'The license conditions',
    example: ['include-copyright'],
  })
  public conditions!: string[];

  @ApiProperty({
    description: 'The license limitations',
    example: ['liability', 'warranty'],
  })
  public limitations!: string[];

  @ApiProperty({ description: 'The license featured', example: true })
  public featured!: boolean;
}
