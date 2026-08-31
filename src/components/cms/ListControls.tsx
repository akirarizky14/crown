import '../../css/components/cms/cms-edit.css'

interface ListControlsProps {
  onMoveUp: () => void
  onMoveDown: () => void
  onRemove: () => void
  canMoveUp: boolean
  canMoveDown: boolean
}

function ListControls({ onMoveUp, onMoveDown, onRemove, canMoveUp, canMoveDown }: ListControlsProps) {
  return (
    <span className="cms-list-controls">
      <button type="button" title="Naik" disabled={!canMoveUp} onClick={(e) => { e.stopPropagation(); onMoveUp() }}>
        ↑
      </button>
      <button type="button" title="Turun" disabled={!canMoveDown} onClick={(e) => { e.stopPropagation(); onMoveDown() }}>
        ↓
      </button>
      <button type="button" className="cms-remove-btn" title="Hapus" onClick={(e) => { e.stopPropagation(); onRemove() }}>
        ✕
      </button>
    </span>
  )
}

export default ListControls
