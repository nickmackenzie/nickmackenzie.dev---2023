import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { TbArrowBigRightFilled } from "react-icons/tb";
import namematch from '../images/namematch.webp'
export default async function Projects() {
    const projects = [
        {
            image: namematch,
            description:
                "A Full Stack App using MongoDB for the database and ReactJS with ChakaraUI as a front-end. This app allows users to 'like' or 'dislike' name suggestions and match with your partner.",
            subtitle: "Find a baby name you and your partner both agree on - tinder style!",
            liveURL: "http://name-match.herokuapp.com/",
            sourceCodeURL: "https://github.com/nickmackenzie/namematch",
            stack: "ReactJS | NodeJS | Mongo-DB",
            name: "NameMatch",
            url: "namematch",
        },
    ];
    return (
        <>
            <div className={styles.wrapper}>
                {projects.map((project, index) => (
                    <div key={project.name} className={styles.card}>
                        <div className={styles.left}>
                            <Image
                                src={namematch}
                                width="430"
                                height="300"
                                alt={project.name}
                            />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.productInfo}>
                                <div className={styles.productName}>
                                    <h1>{project.name}</h1>
                                    <h3>{project.subtitle}</h3>
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
                <Link className={styles.link} href="/projects/souschef">
                    Next <TbArrowBigRightFilled />
                </Link>
            </div>
           
        </>
    );
}
