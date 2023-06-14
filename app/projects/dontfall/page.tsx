import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
export default async function DontFall() {
  const res = await fetch("https://raw.githubusercontent.com/nickmackenzie/hangman/master/README.md")
  const markdown = await res.text()
  return (
  <>
  <MDXRemote source={markdown} />
  <Link href='/projects'>Back</Link>
  </>
  )
}




