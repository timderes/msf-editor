import { Outlet, createRootRoute } from '@tanstack/react-router'
import { MantineProvider } from '@mantine/core'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'robots',
        content: 'noindex, nofollow',
      },
      {
        title: 'MSF Editor',
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <MantineProvider defaultColorScheme="light" deduplicateCssVariables>
      <Outlet />
    </MantineProvider>
  )
}
