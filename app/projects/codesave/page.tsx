import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
export default async function CodeSave() {
  const res = await fetch("https://raw.githubusercontent.com/nickmackenzie/code-save/master/README.md")
  const markdown = await res.text()
  return (
  <>
  <MDXRemote source={markdown} />
  <Link href='/projects'>Back</Link>
  </>
  )
}

