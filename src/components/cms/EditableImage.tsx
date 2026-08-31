import { useRef, useState } from 'react'
import '../../css/components/cms/cms-edit.css'
import { requestCmsUpload } from '../../lib/cmsEditMode'

interface EditableImageProps {
  src: string
  alt: string
  editMode: boolean
  onUploaded: (url: string) => void
  className?: string
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
}

function EditableImage({ src, alt, editMode, onUploaded, className, wrapperClassName, wrapperStyle }: EditableImageProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  if (!editMode) return <img src={src} alt={alt} className={className} />

  function handleFile(file: File | undefined) {
    if (!file) return
    setUploading(true)
    requestCmsUpload(file)
      .then(onUploaded)
      .catch(() => {})
      .finally(() => {
        setUploading(false)
        if (inputRef.current) inputRef.current.value = ''
      })
  }

  return (
    <span className={`cms-edit-image-wrap ${wrapperClassName ?? ''}`} style={wrapperStyle}>
      <img src={src} alt={alt} className={className} />
      <span
        className={`cms-edit-image-overlay ${uploading ? 'uploading' : ''}`}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          inputRef.current?.click()
        }}
      >
        <span className="cms-edit-image-overlay-icon">{uploading ? '…' : '⬆'}</span>
        <span>{uploading ? 'Mengunggah...' : 'Ganti Foto'}</span>
      </span>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        className="cms-edit-image-input"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </span>
  )
}

export default EditableImage
