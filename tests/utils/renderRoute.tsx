import { MantineProvider } from '@mantine/core'
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from '@tanstack/react-router'
import { render } from '@testing-library/react'

import { routeTree } from '../../src/routeTree.gen'
import { ensureBrowserMocks } from './browserMocks'

export function renderRoute(initialEntry: string) {
  ensureBrowserMocks()

  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialEntry],
    }),
  })

  return {
    router,
    ...render(
      <MantineProvider defaultColorScheme="light" deduplicateCssVariables>
        <RouterProvider router={router} />
      </MantineProvider>,
    ),
  }
}
