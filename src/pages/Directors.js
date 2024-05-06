import { useEffect, useState } from "react";
import DirectorCard from "../components/DirectorCard";
import NavBar from "../components/NavBar.js";

function Directors() {
  const [directors, setDirectors] = useState([]) 

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((resp) => resp.json())
      .then((data) => setDirectors(data))
  }, [])

  const directorsList = directors.map((director) => 
    <DirectorCard 
      key={director.id}
      name={director.name}
      movies={director.movies}/>
    )

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  );
};

export default Directors;
