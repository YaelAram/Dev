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

export const getUsers = async (): Promise<User[]> => {
  const params = new URLSearchParams();
  params.append("results", "100");

  const resp = await fetch(`${baseUrl}?${params.toString()}`);

  if (!resp.ok) throw new Error("Error while fetching data");

  const data: UsersResponse = await resp.json();

  return data.results.map(({ login, name, location, picture }) => {
    return {
      id: login.uuid,
      name: name.first,
      lastName: name.last,
      country: location.country,
      picture: picture.thumbnail,
    };
  });
};
