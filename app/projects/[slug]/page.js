import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { TbArrowBigRightFilled, TbArrowBigLeftFilled } from "react-icons/tb";
async function generateStaticParams() {
    try {
        const posts = await fetch(`/api/projects?find=all`);
        const data = await posts.json();
        return data.map((post) => ({
            params: { slug: post.slug },
        }));
    } catch (error) {
        console.log(error);
    }
}

export default async function Projects(params) {
    try {
        const data = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/projects?find=${params.params.slug}`);
        const project = await data.json();
        return (
            <>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className={styles.left}>
                            <Image src={project.image} width="430" height="300" alt={project.name} />
                            <i className="fa fa-long-arrow-left" />
                            <i className="fa fa-long-arrow-right" />
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
                </div>
                <div className={styles.nav}>
                    <Link className={styles.link} href="/projects">
                        <TbArrowBigLeftFilled /> Back
                    </Link>
                    <Link className={styles.link} href="/projects/dontfall">
                        Next <TbArrowBigRightFilled />
                    </Link>
                </div>
            </>
        );
    }catch(error){
        console.log(error)
        return (
            <>
            <div className={styles.wrapper}>
           Nothing here 
            </div>
            <div className={styles.nav}>
                <Link className={styles.link} href="/projects">
                    <TbArrowBigLeftFilled /> Back
                </Link>
                <Link className={styles.link} href="/projects/dontfall">
                    Next <TbArrowBigRightFilled />
                </Link>
            </div>
            
        </>
        )
    }

}
