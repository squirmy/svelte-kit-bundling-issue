import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import { matter } from 'vfile-matter'

const remark = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(() => (_, file) => { matter(file) })
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeStringify)

export function processMarkdown(content: string) {
  return remark.process(content)
}
