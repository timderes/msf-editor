import { describe, expect, it } from 'vitest'

import { screen } from '@testing-library/react'

import { renderRoute } from '../../utils/renderRoute'

describe('editor route', () => {
  it('renders the rich text editor with starter content', async () => {
    renderRoute('/editor')

    expect(await screen.findByText('Welcome to MSF text editor')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Bold' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Undo' })).toBeTruthy()
  })
})
