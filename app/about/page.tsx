import styles from "./page.module.css";
import { aboutExtended } from "./../info/info";

export default function About() {
    return (
        <section className={styles.section}>
            <h1>About Me</h1>
            <h6>
                a results-driven Full Stack Developer with 3+ years of experience in both team and
                independent settings.
            </h6>
            {aboutExtended()}
        </section>
    );
}
