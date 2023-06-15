import Image from "next/image";
import styles from "./page.module.css";
import { name, about, bio, avatar,role } from './info/info';


export default async function Home() {
    
    return (
        <section className={styles.section}>
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{about()}</p>
            <div>
                <Image className={styles.avatar} alt={name} src={avatar} placeholder="blur" width={100} priority />
                <div>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/nickmackenzie">
                        {/* <GitHubIcon /> */}
                    </a>
                </div>
            </div>
            <p>{bio()}</p> 


            <ul>
                <li>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/nickmackenzie">
                        {/* <ArrowIcon /> */}
                        <p>View My Github</p>
                    </a>
                </li>
                <li>
                    <a rel="noopener noreferrer" target="_blank" href="">
                        {/* <ArrowIcon /> */}
                        <p>Contact Me</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}
