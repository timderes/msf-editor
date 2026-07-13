import { Outlet, createRootRoute } from '@tanstack/react-router'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

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
      <ModalsProvider>
        <Notifications autoClose={15000} position="top-right" />
        <Outlet />
      </ModalsProvider>
    </MantineProvider>
  )
}
