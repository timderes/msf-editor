import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import { Markdown } from '@tiptap/markdown'
import { createFileRoute } from '@tanstack/react-router'
import translatedLabels from '#/utils/editor/translatedLabels'
import { Menu, Menubar, Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'
import getFileNameFromContent from '#/lib/editor/getFileNameFromContent'

export const Route = createFileRoute('/editor/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Editor />
}

function Editor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ link: false }),
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Markdown,
    ],
    content: '',
  })

  if (!editor) {
    return null
  }

  const handleSaveArticle = () => {
    modals.openConfirmModal({
      title: 'Soll der Artikel gespeichert werden?',
      children: (
        <Text>
          Der Artikel wird automatisch in das geeignete Format der Webseite
          umgewandelt. Unter Windows wird der Artikel im Download-Ordner
          abgelegt.
        </Text>
      ),
      labels: { confirm: 'Speichern', cancel: 'Abbrechen' },
      onConfirm: () => {
        const content = editor.getMarkdown()

        if (!content || content.trim() === '') {
          console.warn('Editor content is empty. Aborting save operation.')
          notifications.show({
            title: 'Der Artikel hat keinen Inhalt!',
            message: 'Ohne Inhalt kann der Artikel nicht gespeichert werden.',
            color: 'red',
          })

          return
        }

        const fileName = getFileNameFromContent(content)

        const blob = new Blob([content], { type: 'text/markdown' })

        // Open file save dialog
        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = fileName
        a.click()
      },
    })
  }

  return (
    <>
      <Menubar>
        <Menubar.Menu width={220}>
          <Menubar.Target>Datei</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Neuer Artikel</Menu.Item>
            <Menu.Item>Artikel laden</Menu.Item>
            <Menu.Item onClick={() => handleSaveArticle()}>
              Artikel speichern
            </Menu.Item>
            <Menu.Divider>
              <Menu.Item>Editor schließen</Menu.Item>
            </Menu.Divider>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>Hilfe</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Markdown</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>
      <RichTextEditor editor={editor} labels={translatedLabels}>
        <RichTextEditor.Toolbar sticky stickyOffset="var(--docs-header-height)">
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </>
  )
}
