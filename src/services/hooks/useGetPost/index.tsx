import { QueryClient, useQuery } from "@tanstack/react-query";
import { GET_POST_QUERY_KEY } from "./models/constant";
import type { Post } from "./models/types";

export const getPost = (): Promise<Post> =>
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json);

export async function useServerGetPost() {
  const queryClient = new QueryClient();
  const response = await queryClient.fetchQuery<Post>({
    queryKey: GET_POST_QUERY_KEY,
    queryFn: getPost,
  });
  return response;
}

export function useClientGetPost() {
  return useQuery<Post>({
    queryKey: GET_POST_QUERY_KEY,
    queryFn: getPost,
  });
}
