import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import { Bold, Italic, Heading1, Heading2, List, Image as ImageIcon } from "lucide-react"
import { useRef } from "react"

const RichTextEditor = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image
    ],
    content: "<p>Start writing your blog...</p>",
    editorProps: {
      handleDrop(view, event) {
        const files = event.dataTransfer?.files
        if (!files || files.length === 0) return false

        const file = files[0]
        if (!file.type.startsWith("image/")) return false

        const reader = new FileReader()

        reader.onload = () => {
          const src = reader.result as string
          const { schema } = view.state
          const node = schema.nodes.image.create({ src })
          const transaction = view.state.tr.replaceSelectionWith(node)
          view.dispatch(transaction)
        }

        reader.readAsDataURL(file)

        return true
      },

      handlePaste(view, event) {
        const items = event.clipboardData?.items
        if (!items) return false

        for (let item of items) {
          if (item.type.startsWith("image")) {
            const file = item.getAsFile()
            if (!file) continue

            const reader = new FileReader()

            reader.onload = () => {
              const src = reader.result as string
              const { schema } = view.state
              const node = schema.nodes.image.create({ src })
              const transaction = view.state.tr.replaceSelectionWith(node)
              view.dispatch(transaction)
            }

            reader.readAsDataURL(file)
            return true
          }
        }

        return false
      }
    }
  })

  const TitleEditor = useEditor({
    extensions: [
    ],
    content: "<p>Write a Title...</p>",
  })

  if (!editor) return null

  const insertImage = (file: File) => {
    const reader = new FileReader()

    reader.onload = () => {
      editor.chain().focus().setImage({ src: reader.result as string }).run()
    }

    reader.readAsDataURL(file)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) insertImage(file)
  }

  const handleSave = () => {
    const html = editor.getHTML()
    console.log("Save Draft:", html)
  }

  const handlePublish = () => {
    const html = editor.getHTML()
    console.log("Publish:", html)
  }

  return (
    <div className="flex flex-col h-full border rounded-md bg-white">

      <div className="flex gap-2 p-2 border-b">

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded"
        >
          <Bold size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded"
        >
          <Italic size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded"
        >
          <Heading1 size={18} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded"
        >
          <Heading2 size={18} />
        </button>

        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBulletList()
              .run()
          }
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded"
        >
          <List size={18} />
        </button>

        <button
          onClick={handleUploadClick}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded"
        >
          <ImageIcon size={18} />
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          hidden
          accept="image/*"
        />

      </div>

      <div>
        <EditorContent
          editor={TitleEditor}
          className="p-6 overflow-y-auto outline-none text-3xl font-bold border-b text-gray-500"
        />
      </div>
      <div className="flex-1 min-h-0">
        <EditorContent
          editor={editor}
          className="h-full p-6 overflow-y-auto outline-none prose max-w-none"
        />
      </div>

      <div className="flex justify-end gap-3 p-4 border-t">

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Save Draft
        </button>

        <button
          onClick={handlePublish}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Publish
        </button>

      </div>

    </div>
  )
}

export default RichTextEditor