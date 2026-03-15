import { createFileRoute } from '@tanstack/react-router'
import {EventsPage} from "../features/events/pages/event-page.tsx";

export const Route = createFileRoute('/events')({
    component: EventsPage,
})