import { IssueList, LabelPicker } from '../components';
import { useIssues } from '../../hooks/useIssues';
import { LoadingIcon } from '../../components/LoadingIcon';

export const ListView = () => {
  const {
    issuesQuery,
    selectedLabels,
    onChangeLabel,
    state,
    onChangeState,
    page,
    nextPage,
    prevPage,
  } = useIssues();

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList
            issues={issuesQuery.data ?? []}
            state={state}
            onChangeState={onChangeState}
          />
        )}

        <div className="d-flex mt-2 justify-content-between align-items-center">
          <button
            className="btn btn-outline-primary"
            onClick={prevPage}
            disabled={issuesQuery.isFetching || page === 1}>
            Prev
          </button>
          <span>{issuesQuery.isFetching ? 'Loading...' : page}</span>
          <button
            className="btn btn-outline-primary"
            onClick={nextPage}
            disabled={issuesQuery.isFetching}>
            Next
          </button>
        </div>
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName: string) => onChangeLabel(labelName)}
        />
      </div>
    </div>
  );
};
