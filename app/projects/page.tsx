import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import {TbArrowBigRightFilled} from 'react-icons/tb'

export default async function Projects() {
    const projects = [
        {
            image: "/images/namematch.webp",
            description:
                "A Full Stack App using MongoDB for the database and ReactJS with ChakaraUI as a front-end. This app allows users to 'like' or 'dislike' name suggestions and match with your partner.",
            subtitle: "Find a baby name you and your partner both agree on - tinder style!",
            liveURL: "http://name-match.herokuapp.com/",
            sourceCodeURL: "https://github.com/nickmackenzie/namematch",
            stack: "ReactJS | NodeJS | Mongo-DB",
            name: "NameMatch",
            url: "namematch",
        },
        // {
        //     image: "/images/souschef.png",
        //     description:
        //         "A Full Stack React app and MongoDB. It utilizes the PrimeReact library for the UI. It Helps organize working cooks with a global prep lists that sets the right amount of 'par-lev' according to the day.",
        //     subtitle: "A chef's sidekick",
        //     liveURL: "https://souschef3.herokuapp.com/",
        //     sourceCodeURL: "https://github.com/nickmackenzie/souschef",
        //     stack: "ReactJS | Mongo-DB | NodeJs | JWT-Authentication",
        //     name: "SousChef",
        //     url: "souschef",
        // },
        // {
        //     image: "/images/hangman.webp",
        //     description: "A hangman game made with pure JavaScript, HTML and CSS.",
        //     subtitle: "A fun twist on a classic game",
        //     liveURL: "https://nickmackenzie.github.io/hangman/",
        //     sourceCodeURL: "https://github.com/nickmackenzie/hangman",
        //     stack: "HTML | CSS | JavaScript",
        //     name: "Don't Fall Off The Water Fall!",
        //     url: "dontfall",
        // },
        // {
        //     image: "/images/trivia.webp",
        //     description:
        //         "A 'live' multiplayer trivia game with live leader boards. Utilizes Django, OpenTDB API and a MySQL database.",
        //     subtitle: "Multiplayer Bar Trivia",
        //     liveURL: "http://trivia-night-django-app.herokuapp.com/",
        //     sourceCodeURL: "https://github.com/nickmackenzie/Trivia-Night",
        //     stack: "Django | Python | MySQL | JavaScript",
        //     name: "Trivia Night",
        //     url: "trivianight",
        // },
        // {
        //     image: "/images/codesave.png",
        //     description:
        //         "A NodeJs App using Google Authentication. It allows users to save their code 'snippets' to a cloud database. Supports over 15+ languages with automatic syntax highlighting.",
        //     subtitle: "Save your code snippets on the cloud",
        //     liveURL: "https://code-save.herokuapp.com/",
        //     sourceCodeURL: "https://github.com/nickmackenzie/code-save/",
        //     stack: "NodeJS | ExpressJS | MongoDB | Google Authentication API | EJS Templates",
        //     name: "CodeSave",
        //     url: "codesave",
        // },
    ];
    return (
   <>
      <div className={styles.wrapper}>
      {projects.map((project, index) => (
        <div className={styles.card}>
          <div className={styles.left}>
            <Image src={project.image} width='430' height='300' alt={project.name} />
          </div>
          <div className={styles.right}>
            <div className={styles.productInfo}>
              <div className={styles.productName}>
                <h1>{project.name}</h1>
                <h3>{project.subtitle}</h3>
                <i className="fa fa-search" />
                <i className="fa fa-user" />
                <i className="fa fa-shopping-cart" />
              </div>
              <div className={styles.details}>
                <p>{project.description}</p>
              </div>
              <span className={styles.foot}>
                <i className="fa fa-shopping-bag" />
                View Code
              </span>
              <span className={styles.foot}>
                <i className="fa fa-shopping-cart" />
                More Info
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.nav}>
 
 <Link className={styles.link} href='/projects/souschef'>Next <TbArrowBigRightFilled/>
</Link>
</div>
 </>
    );
}
