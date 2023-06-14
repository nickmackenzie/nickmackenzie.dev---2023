import Link from 'next/link'
export default async function Projects() {
  const projects = [
    {
      image: "/images/namematch.webp",
      description: "A Full Stack App using MongoDB for the database and ReactJS with ChakaraUI as a front-end. This app allows users to 'like' or 'dislike' name suggestions and match with your partner.",
      liveURL: "http://name-match.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/namematch",
      stack: "ReactJS | NodeJS | Mongo-DB",
      name: "NameMatch",
      url:'namematch'
    },
    {
      image: "/images/souschef.png",
      description: "A Full Stack React app and MongoDB. It utilizes the PrimeReact library for the UI. It Helps organize working cooks with a global prep lists that sets the right amount of 'par-lev' according to the day.",
      liveURL: "https://souschef3.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/souschef",
      stack: "ReactJS | Mongo-DB | NodeJs | JWT-Authentication",
      name: "SousChef",
      url:'souschef'
    },
    {
      image: "/images/hangman.webp",
      description: "A hangman game made with pure JavaScript, HTML and CSS.",
      liveURL: "https://nickmackenzie.github.io/hangman/",
      sourceCodeURL: "https://github.com/nickmackenzie/hangman",
      stack: "HTML | CSS | JavaScript",
      name: "Don't Fall Off The Water Fall!",
      url:'dontfall'
    },
    {
      image: "/images/trivia.webp",
      description: "A 'live' multiplayer trivia game with live leader boards. Utilizes Django, OpenTDB API and a MySQL database.",
      liveURL: "http://trivia-night-django-app.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/Trivia-Night",
      stack: "Django | Python | MySQL | JavaScript",
      name: "Trivia Night",
      url:'trivianight'
    },
    {
      image: "/images/codesave.png",
      description: "A NodeJs App using Google Authentication. It allows users to save their code 'snippets' to a cloud database. Supports over 15+ languages with automatic syntax highlighting.",
      liveURL: "https://code-save.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/code-save/",
      stack: "NodeJS | ExpressJS | MongoDB | Google Authentication API | EJS Templates",
      name: "CodeSave",
      url:'codesave'
    }
  ];
  return (
 <>
    {projects.map((project, index) => (
     <>
  <section>
    <h1>{project.name}</h1>
    <div className="content">
      <p>
      {project.description}
      </p>      
      <p>{project.stack}</p>
      <a href={project.sourceCodeURL}>View Code</a>
      <Link href={`/projects/${project.url}`}>Learn More</Link>
    </div>
    <div className="img">
    </div>
  </section>








</>

      ))}
      </>
  );

};


