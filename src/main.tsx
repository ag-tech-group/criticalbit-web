import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { reactErrorHandler } from "@sentry/react"
// @ts-expect-error -- fontsource CSS-only import, no types
import "@fontsource-variable/geist"
import { ThemeProvider } from "./components/theme-provider"
import "./index.css"
import { Skeleton } from "./components/ui/skeleton"
import { AnalyticsProvider, createAnalyticsBackend } from "./lib/analytics"
import { AuthProvider, useAuth } from "./lib/auth"
import { initSentry } from "./lib/sentry"
import { routeTree } from "./routeTree.gen"

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: { queryClient, auth: undefined! },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
})

initSentry(router)

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function AppShellSkeleton() {
  return (
    <>
      <nav className="border-border/50 bg-background/80 fixed top-0 z-50 w-full border-b backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-4">
          <span className="font-pixel text-lg tracking-wide">CriticalBit</span>
          <div className="flex items-center gap-2">
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </div>
      </nav>
      <div className="flex min-h-screen flex-col pt-14">
        <div className="flex flex-1 p-4">
          <div className="border-border/40 relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border bg-black/80">
            <div className="flex flex-col items-center gap-6 px-6 text-center">
              <Skeleton className="h-16 w-72 bg-white/30 sm:h-24 sm:w-[28rem]" />
              <Skeleton className="h-5 w-80 bg-white/30" />
              <div className="mt-4 flex w-full max-w-md flex-col gap-3">
                <Skeleton className="h-10 w-full bg-white/30" />
                <Skeleton className="h-10 w-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
        <footer className="border-border/50 border-t px-4 py-3">
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-64" />
            <div className="flex gap-4">
              <Skeleton className="h-3 w-12" />
              <Skeleton className="h-3 w-10" />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

function App() {
  const auth = useAuth()
  if (auth.isLoading) return <AppShellSkeleton />
  return <RouterProvider router={router} context={{ auth }} />
}

const analyticsBackend = createAnalyticsBackend()

createRoot(document.getElementById("root")!, {
  onCaughtError: reactErrorHandler(),
  onUncaughtError: reactErrorHandler(),
  onRecoverableError: reactErrorHandler(),
}).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="criticalbit_theme">
        <AuthProvider>
          <AnalyticsProvider backend={analyticsBackend}>
            <App />
          </AnalyticsProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
