import { useQuery } from "@tanstack/react-query";

async function getRepos(user) {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);
  if (!res.ok) throw new Error("GitHub error " + res.status);
  return res.json();
}

export function useRepos(user) {
  return useQuery({
    queryKey: ["repos", user],
    queryFn: () => getRepos(user),
    staleTime: 1000 * 60 * 5,
  });
}