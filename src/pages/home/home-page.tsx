import { useRef, type KeyboardEvent } from "react"
import "./crt.css"

export function HomePage() {
  const menuRef = useRef<HTMLUListElement>(null)

  function handleMenuKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return
    const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>(
      "a.crt-menu-row--active"
    )
    if (!links || links.length === 0) return
    event.preventDefault()
    const items = Array.from(links)
    const currentIndex = items.indexOf(
      document.activeElement as HTMLAnchorElement
    )
    const delta = event.key === "ArrowDown" ? 1 : -1
    const nextIndex =
      currentIndex === -1
        ? 0
        : (currentIndex + delta + items.length) % items.length
    items[nextIndex]?.focus()
  }

  return (
    <div className="flex flex-1 p-4">
      <div className="crt-screen border-border/40 relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border bg-black/80">
        <div className="crt-tube absolute inset-0 flex items-center justify-center">
          <div className="crt-scanlines pointer-events-none absolute inset-0" />
          <div className="crt-curvature pointer-events-none absolute inset-0" />
          <div className="crt-static pointer-events-none absolute inset-0" />
          <div className="crt-content relative text-center">
            <h1 className="crt-glow font-pixel text-6xl tracking-wide sm:text-8xl">
              <span className="text-white">Critical</span>
              <span>Bit</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Community gaming tools for the games you love.
            </p>
            <ul
              ref={menuRef}
              onKeyDown={handleMenuKeyDown}
              className="crt-menu font-pixel mt-8"
            >
              <li>
                <a
                  className="crt-menu-row crt-menu-row--active"
                  href="https://vagrant-story.criticalbit.gg"
                >
                  <span className="crt-menu-cursor" aria-hidden>
                    ▸
                  </span>
                  <span>VAGRANT STORY</span>
                  <span className="crt-menu-dots" aria-hidden />
                  <span>[PLAY]</span>
                </a>
              </li>
              <li>
                <div
                  className="crt-menu-row crt-menu-row--disabled"
                  aria-disabled="true"
                >
                  <span className="crt-menu-cursor" aria-hidden>
                    {" "}
                  </span>
                  <span>COMING SOON</span>
                  <span className="crt-menu-dots" aria-hidden />
                  <span>[----]</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
