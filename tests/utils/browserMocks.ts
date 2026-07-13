export function ensureBrowserMocks() {
  Object.defineProperty(window, 'scrollTo', {
    value: () => {},
    writable: true,
  })

  Object.defineProperty(window, 'matchMedia', {
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
    writable: true,
  })

  Object.defineProperty(window, 'ResizeObserver', {
    value: class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
    writable: true,
  })
}
