import { Title } from '@mantine/core'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <Title>MSF Editor</Title>
      <Link to="/editor">Go to Editor</Link>
    </main>
  )
}
