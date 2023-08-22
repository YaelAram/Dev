import { type UsersResponse } from "../interfaces/Response";

const baseUrl = "https://randomuser.me/api/";

export interface User {
  id: string;
  name: string;
  lastName: string;
  country: string;
  picture: string;
}

export type UserKeys = keyof User;

export interface UsersInfo {
  nextCursor?: number;
  users: User[];
}

export const getUsers = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<UsersInfo> => {
  const params = new URLSearchParams();
  params.append("results", "10");
  params.append("seed", "yaelbcby");
  params.append("page", String(pageParam));

  const resp = await fetch(`${baseUrl}?${params.toString()}`);

  if (!resp.ok) throw new Error("Error while fetching data");

  const data: UsersResponse = await resp.json();

  const users = data.results.map(({ login, name, location, picture }) => {
    return {
      id: login.uuid,
      name: name.first,
      lastName: name.last,
      country: location.country,
      picture: picture.thumbnail,
    };
  });

  const currentPage = Number(data.info.page);

  return {
    nextCursor: currentPage > 3 ? undefined : currentPage + 1,
    users,
  };
};
