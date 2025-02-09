'use client'

import { BubbleMenu, EditorContent, EditorProvider, FloatingMenu, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import { Color } from '@tiptap/extension-color'
import { useFormContext } from 'react-hook-form'



const BubbleMenuComponent = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <BubbleMenu editor={editor} className="bg-gray-50 shadow rounded p-2 flex flex-wrap space-x-2 space-y-2 ">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${editor.isActive('bold') ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive('italic') ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${editor.isActive('strike') ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
      >
        Strike
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`${editor.isActive('code') ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
      >
        Code
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        style={{
          backgroundColor: editor.isActive('textStyle', { color: '#958DF1' }) ? '#958DF1' : 'transparent',
          color: editor.isActive('textStyle', { color: '#958DF1' }) ? '#fff' : '#000',
        }}
        className={`${editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}  px-1 rounded-[4px]`}
      >
        <span>Color</span> 
        <span className=''></span>
      </button>

      <button
        type='button'
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${editor.isActive('codeBlock') ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
      >
        Code block
      </button>

      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${editor.isActive('blockquote') ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
      >
        Blockquote
      </button>

      <button type='button' onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        Horizontal rule
      </button>

      <button type='button' onClick={() => editor.chain().focus().setHardBreak().run()}>
        Hard break
      </button>



      {/*  */}
      <FloatingMenu className="floating-menu border border-gray-200 shadow z-10 !bg-gray-50" tippyOptions={{ duration: 100 }} editor={editor}>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`${editor.isActive('heading', { level: 1 }) ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${editor.isActive('heading', { level: 2 }) ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`${editor.isActive('heading', { level: 3 }) ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${editor.isActive('bulletList') ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
        >
          Bullet list
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${editor.isActive('bulletList') ? 'is-active bg-gray-300' : ''} px-1 rounded-[4px]`}
        >
          Ordered list
        </button>



      </FloatingMenu>
    </BubbleMenu>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
]




export default function RichTextEditor({ defaultValue }: { defaultValue: string }) {
  // Access the form context
  const { setValue } = useFormContext();


  

  return (
    <div className="border border-gray-200 rounded-lg p-5 mt-5">
      <EditorProvider
        // slotBefore={<MenuBar />}
        extensions={extensions}
        content={defaultValue}
        onUpdate={({ editor }) => {
          setValue('content', editor.getHTML());
        }}
      >
        <BubbleMenuComponent />
        <EditorContent editor={null} />
      </EditorProvider>
    </div>
  )
}
