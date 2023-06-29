import { useQuery } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../providers/githubProvider";

export const useIssue = (issueNumber: string) => {
  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssue(issueNumber),
    { staleTime: 1_000 * 60 * 30 }
  );

  // En las opciones, el atributo enable indica si el query debe realizarse, false: No se ejecuta
  const issueCommentsQuery = useQuery(
    ['issue', issueNumber, 'comments'],
    () => getIssueComments(issueNumber),
    { staleTime: 1_000 * 60 * 30 }
  );

  return {
    issueQuery,
    issueCommentsQuery
  };
};
