/**
 * Takes the first line of the content and extracts the title from it to generate a file name.
 * If there is no title, it defaults to "neuer-artikel.mdx".
 *
 * @param content The article content
 * @returns The generated file name
 */
const getFileNameFromContent = (content: string): string => {
  const firstLine = content.split('\n')[0]
  const match = firstLine.match(/^#\s+(.*)/)

  if (match) {
    return match[1].trim().replace(/\s+/g, '-') + '.mdx'
  }

  return 'neuer-artikel.mdx'
}

export default getFileNameFromContent
