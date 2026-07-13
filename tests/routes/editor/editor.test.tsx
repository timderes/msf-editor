// @vitest-environment jsdom

import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'

import { renderRoute } from '../../utils/renderRoute'

describe('editor route', () => {
  it('renders the editor controls with german labels', async () => {
    await renderRoute('/editor')

    const labels = [
      'Fett',
      'Kursiv',
      'Unterstrichen',
      'Durchgestrichen',
      'Formatierung entfernen',
      'Hervorheben',
      'Code',
      'Überschrift 1',
      'Überschrift 2',
      'Überschrift 3',
      'Überschrift 4',
      'Blockzitat',
      'Linie',
      'Liste',
      'Nummerierte Liste',
      'Tiefgestellt',
      'Hochgestellt',
      'Link einfügen',
      'Link entfernen',
      'Linksbündig',
      'Zentriert',
      'Blocksatz',
      'Rechtsbündig',
      'Rückgängig',
      'Wiederholen',
    ]

    for (const label of labels) {
      expect(await screen.findByRole('button', { name: label })).toBeTruthy()
    }
  })
})
