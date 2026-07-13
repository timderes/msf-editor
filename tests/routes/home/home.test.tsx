// @vitest-environment jsdom

import { describe, expect, it } from 'vitest'

import { screen } from '@testing-library/react'

import { renderRoute } from '../../utils/renderRoute'

describe('home route', () => {
  it('shows the app title and editor link', async () => {
    renderRoute('/')

    expect(
      await screen.findByRole('heading', { name: 'MSF Editor' }),
    ).toBeTruthy()

    const editorLink = await screen.findByRole('link', { name: 'Go to Editor' })
    expect(editorLink.getAttribute('href')).toBe('/editor')
  })
})
