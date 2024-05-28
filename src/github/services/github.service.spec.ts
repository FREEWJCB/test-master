import { Test, TestingModule } from '@nestjs/testing';
import { GithubService } from './github.service';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { GithubRepoResponse } from '../responses/github.response';
import { HttpService } from '@nestjs/axios';
import { RequestService } from '../request.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubService,
        RequestService,
        { provide: HttpService, useValue: { get: jest.fn() } },
      ],
    }).compile();

    service = module.get<GithubService>(GithubService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Prueba para la función lists
  describe('lists', () => {
    it('should return an array of GithubRepoResponse', () => {
      const result: GithubRepoResponse[] = Array(10).fill({
        id: 123,
        node_id: 'MDEwOlJlcG9zaXRvcnkx',
        name: 'test-repo',
        full_name: 'test-user/test-repo',
        private: false,
        owner: {
          login: 'test-user',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: 'https://github.com/images/error/octocat_happy.gif',
          gravatar_id: '',
          url: 'https://api.github.com/users/octocat',
          html_url: 'https://github.com/octocat',
          followers_url: 'https://api.github.com/users/octocat/followers',
          following_url:
            'https://api.github.com/users/octocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/octocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/octocat/Hello-World',
        description: 'This is your first repository',
        fork: false,
        url: 'https://api.github.com/repos/octocat/Hello-World',
        forks_url: 'https://api.github.com/repos/octocat/Hello-World/forks',
        keys_url:
          'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/octocat/Hello-World/teams',
        hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
        issue_events_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
        events_url: 'https://api.github.com/repos/octocat/Hello-World/events',
        assignees_url:
          'https://api.github.com/repos/octocat/Hello-World/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/octocat/Hello-World/branches{/branch}',
        tags_url: 'https://api.github.com/repos/octocat/Hello-World/tags',
        blobs_url:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/octocat/Hello-World/languages',
        stargazers_url:
          'https://api.github.com/repos/octocat/Hello-World/stargazers',
        contributors_url:
          'https://api.github.com/repos/octocat/Hello-World/contributors',
        subscribers_url:
          'https://api.github.com/repos/octocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/octocat/Hello-World/subscription',
        commits_url:
          'https://api.github.com/repos/octocat/Hello-World/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/octocat/Hello-World/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/octocat/Hello-World/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/octocat/Hello-World/merges',
        archive_url:
          'https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/octocat/Hello-World/downloads',
        issues_url:
          'https://api.github.com/repos/octocat/Hello-World/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/octocat/Hello-World/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
        releases_url:
          'https://api.github.com/repos/octocat/Hello-World/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/octocat/Hello-World/deployments',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        pushed_at: '2011-01-26T19:06:43Z',
        git_url: 'git://github.com/octocat/Hello-World.git',
        ssh_url: 'git@github.com:octocat/Hello-World.git',
        clone_url: 'https://github.com/octocat/Hello-World.git',
        svn_url: 'https://svn.github.com/octocat/Hello-World',
        homepage: 'https://github.com',
        size: 108,
        stargazers_count: 80,
        watchers_count: 80,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 9,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 9,
        open_issues: 0,
        watchers: 80,
        default_branch: 'master',
        score: 1.0,
      });

      const response: AxiosResponse<GithubRepoResponse[]> = {
        data: result,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          baseURL: 'https://api.github.com/repos/google/',
          headers: undefined,
        },
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(response));

      service.lists({}).then((res) => {
        expect(res).toEqual(result);
      });
    });
  });
});
