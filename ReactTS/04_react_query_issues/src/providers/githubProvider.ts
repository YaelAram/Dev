import { Label } from '../interfaces/label';
import { githubAPI } from '../api/githubAPI';

export const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubAPI.get<Label[]>('/labels');
  return data;
};
