import '../../css/components/cms/cms-edit.css'

interface AddItemButtonProps {
  label: string
  onClick: () => void
  className?: string
}

function AddItemButton({ label, onClick, className }: AddItemButtonProps) {
  return (
    <button type="button" className={`cms-add-item-btn ${className ?? ''}`} onClick={(e) => { e.stopPropagation(); onClick() }}>
      <span>+</span> {label}
    </button>
  )
}

export default AddItemButton
