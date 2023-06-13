import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      image: "/images/namematch.webp",
      description: "A Full Stack App using MongoDB for the database and ReactJS with ChakaraUI as a front-end. This app allows users to 'like' or 'dislike' name suggestions and match with your partner.",
      liveURL: "http://name-match.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/namematch",
      stack: "ReactJS | NodeJS | Mongo-DB",
      name: "NameMatch"
    },
    {
      image: "/images/souschef.png",
      description: "A Full Stack React app and MongoDB. It utilizes the PrimeReact library for the UI. It Helps organize working cooks with a global prep lists that sets the right amount of 'par-lev' according to the day.",
      liveURL: "https://souschef3.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/souschef",
      stack: "ReactJS | Mongo-DB | NodeJs | JWT-Authentication",
      name: "SousChef"
    },
    {
      image: "images/hangman.webp",
      description: "A hangman game made with pure JavaScript, HTML and CSS.",
      liveURL: "https://nickmackenzie.github.io/hangman/",
      sourceCodeURL: "https://github.com/nickmackenzie/hangman",
      stack: "HTML | CSS | JavaScript",
      name: "Don't Fall Off The Water Fall!"
    },
    {
      image: "/images/trivia.webp",
      description: "A 'live' multiplayer trivia game with live leader boards. Utilizes Django, OpenTDB API and a MySQL database.",
      liveURL: "http://trivia-night-django-app.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/Trivia-Night",
      stack: "Django | Python | MySQL | JavaScript",
      name: "Trivia Night"
    },
    {
      image: "images/codesave.png",
      description: "A NodeJs App using Google Authentication. It allows users to save their code 'snippets' to a cloud database. Supports over 15+ languages with automatic syntax highlighting.",
      liveURL: "https://code-save.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/code-save/",
      stack: "NodeJS | ExpressJS | MongoDB | Google Authentication API | EJS Templates",
      name: "CodeSave"
    }
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Tech Stack: {project.stack}</p>
          <p>
            Live URL: <a href={project.liveURL}>{project.liveURL}</a>
          </p>
          <p>
            Source Code:{" "}
            <a href={project.sourceCodeURL}>{project.sourceCodeURL}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
