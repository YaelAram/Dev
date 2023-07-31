import { useEffect, useRef, useState } from "react";

export const useQuery = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState();
  const [sort, setSort] = useState(false);
  const isFirstInput = useRef(true);

  const updateInput = (newQuery) => {
    if (newQuery.startsWith(" ")) return;
    setQuery(newQuery);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return;
    }

    if (query === "") {
      setError("Movie title is required");
      return;
    }
    setError(undefined);
  }, [query]);

  return {
    query,
    error,
    sort,
    updateInput,
    handleSort,
  };
};
