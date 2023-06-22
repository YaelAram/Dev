import { useQuery } from "@tanstack/react-query";

import { getLabels } from '../providers/githubProvider';

export const useLabels = () => {
  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      refetchOnWindowFocus: false
    }
  );

  return labelsQuery;
};
