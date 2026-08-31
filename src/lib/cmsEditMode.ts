export function isCmsEditMode(): boolean {
  if (typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).get('cms') === '1'
}

function canNotifyParent(): boolean {
  return typeof window !== 'undefined' && !!window.parent && window.parent !== window
}

export function notifyCmsPatch(patch: Record<string, unknown>) {
  if (!canNotifyParent()) return
  window.parent.postMessage({ type: 'crown-cms-patch', patch }, '*')
}

export function requestCmsUpload(file: File): Promise<string> {
  if (!canNotifyParent()) return Promise.reject(new Error('Not in CMS edit mode'))

  const requestId = crypto.randomUUID()

  return new Promise((resolve, reject) => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type !== 'crown-cms-upload-result' || e.data.requestId !== requestId) return
      window.removeEventListener('message', handleMessage)
      if (e.data.url) resolve(e.data.url)
      else reject(new Error(e.data.error || 'Upload gagal'))
    }
    window.addEventListener('message', handleMessage)
    window.parent.postMessage({ type: 'crown-cms-upload', requestId, file }, '*')
  })
}
