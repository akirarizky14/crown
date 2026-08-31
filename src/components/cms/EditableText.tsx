import { useEffect, useRef, useState, type ReactNode } from 'react'
import '../../css/components/cms/cms-edit.css'

interface EditableTextProps {
  value: string
  onChange: (value: string) => void
  editMode: boolean
  multiline?: boolean
  className?: string
  placeholder?: string
  rows?: number
  children?: ReactNode
}

function EditableText({ value, onChange, editMode, multiline, className, placeholder, rows, children }: EditableTextProps) {
  const [draft, setDraft] = useState(value)
  const [focused, setFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!focused) setDraft(value)
  }, [value, focused])

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  })

  if (!editMode) return <>{children ?? value}</>

  function commit() {
    setFocused(false)
    if (draft !== value) onChange(draft)
  }

  if (multiline) {
    return (
      <textarea
        ref={textareaRef}
        className={`cms-edit-text ${className ?? ''}`}
        value={draft}
        placeholder={placeholder}
        rows={rows ?? 1}
        onChange={(e) => setDraft(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={commit}
        onClick={(e) => e.stopPropagation()}
      />
    )
  }

  return (
    <input
      className={`cms-edit-text ${className ?? ''}`}
      value={draft}
      placeholder={placeholder}
      onChange={(e) => setDraft(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={commit}
      onClick={(e) => e.stopPropagation()}
    />
  )
}

export default EditableText
