export async function generateStaticParams() {
     const posts = await fetch(process.env.URL + '/api/projects')
     const data = await posts.json();   
    return data.map((post: { name: any; }) => ({
      name: post.name,
    }))
  }

  export default function Page({ params }: { params: { name: string } }) {
   console.log('asdasdasd',params)
    return <h1>My Page {params.name}</h1>
  }