import { useState } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { State } from '../interfaces';
import { getIssuesInfinite } from '../providers/githubProvider';

export const useIssuesInfinite = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>();

  const issuesQuery = useInfiniteQuery(
    ['issues', 'infinite', { state, selectedLabels, page: 1 }],
    (data) => getIssuesInfinite(data),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return;

        return pages.length + 1;
      },
    },
  );

  const onChangeLabel = (labelName: string): void => {
    if (selectedLabels.includes(labelName))
      setSelectedLabels(selectedLabels.filter((label) => label !== labelName));
    else setSelectedLabels([...selectedLabels, labelName]);
  };

  const onChangeState = (newState?: State) => setState(newState);

  return {
    issuesQuery,
    selectedLabels,
    onChangeLabel,
    state,
    onChangeState,
  };
};
