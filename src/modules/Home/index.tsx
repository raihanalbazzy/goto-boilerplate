import React from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Example {
  data: Post;
}

const getPost = (): Promise<Post> =>
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json);

const Component = ({ data }: Example) => (
  <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <h1 className="text-default">Goto BoilerPlate</h1>
    <p className="text-default">{JSON.stringify(data, null, 4)}</p>
  </main>
);

/**
 * to use client add 'use client' at the top of the file
 */
const HomePageClient = () => {
  const { data } = useQuery<Post>({
    queryKey: ["post"],
    queryFn: getPost,
  });

  return <Component data={data!} />;
};

const HomePage = async () => {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery<Post>({
    queryKey: ["posts"],
    queryFn: getPost,
  });

  return <Component data={data} />;
};

export default HomePage;
