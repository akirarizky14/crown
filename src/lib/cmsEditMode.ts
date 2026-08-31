export function isCmsEditMode(): boolean {
  if (typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).get('cms') === '1'
}

export function notifyCmsEdit(section: string) {
  if (typeof window === 'undefined') return
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'crown-cms-edit', section }, '*')
  }
}
