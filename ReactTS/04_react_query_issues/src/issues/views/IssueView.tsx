import { Link, Navigate, useParams } from 'react-router-dom';

import { IssueComment } from '../components';
import { LoadingIcon } from '../../components/LoadingIcon';

import { useIssue } from '../../hooks/useIssue';

export const IssueView = () => {
  const { id } = useParams();
  const { issueQuery, issueCommentsQuery } = useIssue(id ?? '0');

  if (issueQuery.isLoading) return <LoadingIcon />;

  if (!issueQuery.data) return <Navigate to="/issues/list" />;

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>
      <IssueComment issue={issueQuery.data} />
      {issueCommentsQuery.isLoading ? (
        <LoadingIcon />
      ) : (
        issueCommentsQuery.data?.map((issue) => (
          <IssueComment key={issue.id} issue={issue} />
        ))
      )}
    </div>
  );
};
