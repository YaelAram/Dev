import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../providers/githubProvider';
import { State } from '../interfaces';

export const useIssues = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>();
  const [page, setPage] = useState<number>(1);

  const issuesQuery = useQuery(
    ['issues', { state, selectedLabels, page }],
    () => getIssues(selectedLabels, state, page),
    {
      refetchOnWindowFocus: false,
      staleTime: 1_000 * 60 * 10,
    },
  );

  useEffect(() => setPage(1), [state, selectedLabels]);

  const onChangeLabel = (labelName: string): void => {
    if (selectedLabels.includes(labelName))
      setSelectedLabels(selectedLabels.filter((label) => label !== labelName));
    else setSelectedLabels([...selectedLabels, labelName]);
  };

  const onChangeState = (newState?: State) => setState(newState);

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;

    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return {
    // Query
    issuesQuery,
    // Labels
    selectedLabels,
    onChangeLabel,
    // State
    state,
    onChangeState,
    // Page
    page,
    nextPage,
    prevPage,
  };
};
