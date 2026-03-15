import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import {NotFound} from "./features/shared/not-found.tsx";

export const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound,
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}