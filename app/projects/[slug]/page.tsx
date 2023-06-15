import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import {TbArrowBigRightFilled,TbArrowBigLeftFilled} from 'react-icons/tb'


export async function generateStaticParams() {
     const posts = await fetch(process.env.URL + '/api/projects?find=all')
     const data = await posts.json();   
     
    return data.map((post: { slug: any; url:any }) => ({
      slug: post.url,
      url: post.url
    }))
  }

 

  export default async function Page({ params }: { params: { slug: string } }) {
   const data = await fetch(process.env.URL + `/api/projects?find=${params.slug}`)
   const project = await data.json();


   return (
   <>
    
      <div className={styles.wrapper}>
      
        <div className={styles.card}>
          <div className={styles.left}>
            <Image src={project.image} width='430' height='300' alt={project.name} />
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
 <Link className={styles.link} href='/projects'><TbArrowBigLeftFilled/>   Back</Link>
 <Link className={styles.link} href='/projects/dontfall'>Next <TbArrowBigRightFilled/>
</Link>
</div>
 </>
             

   )
}