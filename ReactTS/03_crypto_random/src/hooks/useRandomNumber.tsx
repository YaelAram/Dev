import { useQuery } from "@tanstack/react-query";
import { getRandomNumber } from "../providers/randomNumberProvider";

export const useRandomNumber = () => {
  const query = useQuery(
    ['randomNumber'],
    getRandomNumber
  );

  return query;
};
