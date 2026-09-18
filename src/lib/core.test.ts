import { describe, expect, it } from 'vitest';
import { parseGitHubUrl, UrlError } from './url';
import { normalizeSkills, stackSkills } from './skills';
import { DeterministicAnalysisProvider } from './analysis';
import type { RepoContext } from '../types';

describe('GitHub URL parsing', () => {
  it('normalizes repository, issue, and tree URLs', () => {
    expect(parseGitHubUrl('https://github.com/pallets/flask/')).toEqual({ owner: 'pallets', repo: 'flask' });
    expect(parseGitHubUrl('https://github.com/pallets/flask/issues/42')).toEqual({ owner: 'pallets', repo: 'flask', issueNumber: 42 });
    expect(parseGitHubUrl('https://github.com/pallets/flask/tree/main')).toEqual({ owner: 'pallets', repo: 'flask' });
  });
  it('rejects malformed or other forge URLs', () => { expect(() => parseGitHubUrl('github.com/x/y')).toThrow(UrlError); expect(() => parseGitHubUrl('https://gitlab.com/x/y')).toThrow(UrlError); });
});
describe('skill normalization', () => { it('finds aliases and known skills', () => { expect(normalizeSkills('Py, JS, Postgres, REST APIs')).toEqual(expect.arrayContaining(['python','javascript','postgresql','rest'])); }); it('detects project stack from files', () => { expect(stackSkills({ TypeScript: 4 }, ['package.json','src/App.tsx','tests/App.test.tsx'])).toEqual(expect.arrayContaining(['typescript','node.js'])); }); });
describe('deterministic ranking', () => { const context: RepoContext = { repo: { full_name:'o/r',name:'r',description:null,html_url:'https://github.com/o/r',stargazers_count:0,forks_count:0,open_issues_count:2,updated_at:new Date().toISOString(),default_branch:'main',license:null,archived:false,owner:{login:'o'} }, languages:{Python:1}, files:[{path:'src/client.py',type:'blob'},{path:'tests/test_client.py',type:'blob'}], readme:'', contributing:'Run pytest\nUse a branch', recentCommitDate:new Date().toISOString(), issues:[{number:1,title:'Fix client pagination',html_url:'https://x/1',labels:[{name:'good first issue',color:'fff'}],state:'open',updated_at:new Date().toISOString(),comments:1,body:'Steps to reproduce. Expected behavior in `src/client.py`.',assignees:[]},{number:2,title:'Architecture redesign',html_url:'https://x/2',labels:[],state:'open',updated_at:'2020-01-01',comments:35,body:'Major migration proposal',assignees:[]}] };
  it('ranks clear labelled active issues above stale architecture work', () => { const result = new DeterministicAnalysisProvider().analyzeRepository(context,['python','pytest']); expect(result.recommendations[0].issue.number).toBe(1); expect(result.recommendations[0].relevantFiles.map(x => x.path)).toContain('src/client.py'); expect(result.rules.testing).toContain('Run pytest'); });
});
