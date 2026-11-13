import { useState } from "react";
import { useRepos } from "../hooks/useRepos";

export default function Projects() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, refetch } = useRepos("fatimagi-boop");

  if (isLoading) {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <p>Loading projects...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <p className="error">Could not load projects.</p>
        <button onClick={() => refetch()}>Try again</button>
      </section>
    );
  }

  const shown = data.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects">
      <h2>Projects</h2>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search projects..."
      />

      {shown.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul className="grid">
          {shown.map((repo) => (
            <li key={repo.id} className="card">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description"}</p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}