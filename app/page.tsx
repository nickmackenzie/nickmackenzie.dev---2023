import Image from "next/image";
import styles from "./page.module.css";
import { name, about, bio, avatar,role } from './info/info';
import {GrContact} from 'react-icons/gr'
import {DiGithubFull} from 'react-icons/di'
export default async function Home() {
    
    return (
        <section className={styles.section}>
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{about()}</p>
            <div>
                {/* <Image className={styles.avatar} alt={name} src={avatar} placeholder="blur" width={100} priority /> */}
             
            </div>
            <p>{bio()}</p> 


            <ul className={styles.links}>
                <li>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/nickmackenzie">
                        {/* <ArrowIcon /> */}
                        <DiGithubFull title="Github Profile Link" size='3em'/> 
                      
                    </a>
                </li>
             
            </ul>
        </section>
    );
}
