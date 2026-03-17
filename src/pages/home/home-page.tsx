import "./crt.css"

export function HomePage() {
  return (
    <div className="flex flex-1 p-4">
      <div className="crt-screen border-border/40 relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border bg-black/80">
        <div className="crt-scanlines pointer-events-none absolute inset-0" />
        <div className="crt-curvature pointer-events-none absolute inset-0" />
        <div className="crt-content relative text-center">
          <h1 className="font-pixel text-6xl tracking-wide sm:text-8xl">
            CriticalBit
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Community gaming tools for the games you love.
          </p>
          <p className="text-muted-foreground mt-2 text-sm">Coming soon.</p>
        </div>
      </div>
    </div>
  )
}
