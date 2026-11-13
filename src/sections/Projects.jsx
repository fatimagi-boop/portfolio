import { useRepos } from "../hooks/useRepos";

export default function Projects() {
    const { data, isLoading, isError, refetch} = useRepos("fatimagi-boop");

    if(isLoading){
        return (
            <section id ="projects">
                <h2>Projects</h2>
                <p>Loading projects...</p>
                </section>
        );
}

if (isError) {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <p className= "error">Could not load projects.</p>
            <button onClick={() => refetch()}>Try again</button>       
             </section>
    
    );
}
return (
    <section id="projects">
        <h2>Projects</h2>
        {data.length === 0 ?(
            <p>No projects found.</p>
        ): (
            <ul>
                {data.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                 ))}
            </ul>
)}
    </section>
);
}
