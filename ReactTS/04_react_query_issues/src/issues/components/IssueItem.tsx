import { FC } from 'react';

import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

import { Issue, State } from '../../interfaces';
import { useIssuePrefetch } from '../../hooks/useIssuePrefetch';
import { timeSince } from '../../helpers/timeSince';

interface Props {
  issue: Issue;
}

export const IssueItem: FC<Props> = ({ issue }) => {
  const { handleClickIssue, handleMouseEnter } = useIssuePrefetch(
    `${issue.number}`,
  );

  return (
    <div
      className="card mb-2 issue"
      onClick={handleClickIssue}
      onMouseEnter={handleMouseEnter}>
      <div className="card-body d-flex align-items-center">
        {issue.state === State.Open ? (
          <FiInfo size={30} color="red" />
        ) : (
          <FiCheckCircle size={30} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            {`#${issue.number} opened ${timeSince(issue.created_at)} ago by `}
            <span className="fw-bold">{issue.user.login}</span>
          </span>
          <div>
            {issue.labels.map((label) => (
              <span
                key={label.id}
                className="badge rounded-pill m-1"
                style={{ backgroundColor: `#${label.color}`, color: 'black' }}>
                {label.name}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
