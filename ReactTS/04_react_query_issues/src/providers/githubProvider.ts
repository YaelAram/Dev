import { Label, Issue, State } from '../interfaces';

import { githubAPI } from '../api/githubAPI';

interface Props {
  state?: State;
  selectedLabels: string[];
  page?: number;
};

interface QueryProps {
  pageParam?: number;
  queryKey: (string | Props)[]
};

export const getLabels = async (): Promise<Label[]> => {
  try {
    const params: URLSearchParams = new URLSearchParams();
    params.append('per_page', '100');
    const { data } = await githubAPI.get<Label[]>('/labels', { params });
    return data;
  }
  catch (error: any) {
    const errorObj = error.toJSON();
    throw new Error(`${errorObj?.message}`, { cause: 'URL incorrecto' })
  }
};

export const getIssues = async ({ state, selectedLabels, page = 1 }: Props): Promise<Issue[]> => {
  try {
    const params: URLSearchParams = new URLSearchParams();
    if (state) params.append('state', state);
    if (selectedLabels.length > 0) params.append('labels', selectedLabels.join(','));
    params.append('page', page.toString());
    params.append('per_page', '5');


    const { data } = await githubAPI.get<Issue[]>('/issues', { params });
    return data;
  }
  catch (error: any) {
    const errorObj = error.toJSON();
    throw new Error(`${errorObj?.message}`, { cause: 'URL incorrecto' })
  }
};

export const getIssuesInfinite = async ({ pageParam = 1, queryKey }: QueryProps): Promise<Issue[]> => {
  const [, , args] = queryKey;
  const { state, selectedLabels } = args as Props;

  try {
    const params: URLSearchParams = new URLSearchParams();
    if (state) params.append('state', state);
    if (selectedLabels.length > 0) params.append('labels', selectedLabels.join(','));
    params.append('page', pageParam.toString());
    params.append('per_page', '5');


    const { data } = await githubAPI.get<Issue[]>('/issues', { params });
    return data;
  }
  catch (error: any) {
    const errorObj = error.toJSON();
    throw new Error(`${errorObj?.message}`, { cause: 'URL incorrecto' })
  }
};

export const getIssue = async (issueNumber: string): Promise<Issue> => {
  try {
    const { data } = await githubAPI.get<Issue>(`/issues/${issueNumber}`);
    return data;
  }
  catch (error: any) {
    const errorObj = error.toJSON();
    throw new Error(`${errorObj?.message}`, { cause: 'URL incorrecto' })
  }
};

export const getIssueComments = async (issueNumber: string): Promise<Issue[]> => {
  try {
    const { data } = await githubAPI.get<Issue[]>(`/issues/${issueNumber}/comments`);
    return data;
  }
  catch (error: any) {
    const errorObj = error.toJSON();
    throw new Error(`${errorObj?.message}`, { cause: 'URL incorrecto' })
  }
};
