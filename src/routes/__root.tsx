import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    component: RootLayout,
})

// wraps all child routes
// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-6">
                <Outlet />
            </main>
            <TanStackRouterDevtools />
        </div>
    )
}