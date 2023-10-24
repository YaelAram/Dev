import { FilterKeyType, type Product } from "../interfaces";
import { productsApi } from "./products";

interface Options {
  filterKey?: FilterKeyType;
}

export const getProducts = async ({ filterKey }: Options) => {
  const searchParams = new URLSearchParams();
  searchParams.append("category", filterKey ?? "");

  const params = filterKey ? `?${searchParams.toString()}` : "";

  const { data } = await productsApi.get<Product[]>(`/products${params}`);

  return data;
};
