import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { getIssue, getIssueComments } from '../providers/githubProvider';

export const useIssuePrefetch = (issueNumber: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClickIssue = () =>
    navigate(`/issues/issue/${issueNumber}`, { replace: true });

  const handleMouseEnter = () => {
    queryClient.prefetchQuery(
      ['issue', issueNumber],
      () => getIssue(issueNumber),
      { staleTime: 1_000 * 60 * 30 },
    );

    queryClient.prefetchQuery(
      ['issue', issueNumber, 'comments'],
      () => getIssueComments(issueNumber),
      { staleTime: 1_000 * 60 * 30 },
    );
  };

  return {
    handleClickIssue,
    handleMouseEnter,
  };
};
