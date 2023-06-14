import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
export const Page = async () => {
  const res = await fetch("https://raw.githubusercontent.com/nickmackenzie/namematch/master/README.md")
  const markdown = await res.text()
  return (
  <>
  <MDXRemote source={markdown} />
  <Link href='/projects'>Back</Link>
  </>
  )
}

export default Page;




