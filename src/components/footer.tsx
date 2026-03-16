import { Link } from "@tanstack/react-router"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border/50 border-t px-4 py-3">
      <div className="text-muted-foreground flex items-center justify-between text-xs">
        <p>&copy; {year} CriticalBit. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            to="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
