import { IssueList, LabelPicker } from '../components';
import { useIssuesInfinite } from '../../hooks/useIssuesInfinite';
import { LoadingIcon } from '../../components/LoadingIcon';

export const ListViewInfinite = () => {
  const {
    issuesQuery,
    selectedLabels, onChangeLabel,
    state, onChangeState
  } = useIssuesInfinite();

  return (
    <div className="row mt-5">

      <div className="col-8">
        {
          (issuesQuery.isLoading) ?
            (<LoadingIcon />) :
            (<IssueList issues={issuesQuery.data?.pages.flat() ?? []} state={state} onChangeState={onChangeState} />)
        }

        <button
          className='btn btn-outline-primary mt-3'
          onClick={() => issuesQuery.fetchNextPage()}
          disabled={!issuesQuery.hasNextPage}>
          Load More...
        </button>
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName: string) => onChangeLabel(labelName)} />
      </div>
    </div>
  )
}
