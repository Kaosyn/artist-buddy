import { createFileRoute } from '@tanstack/react-router'
import { InventoryPage } from '../features/inventory/pages/inventory-page'

export const Route = createFileRoute('/inventory')({
    component: InventoryPage,
})