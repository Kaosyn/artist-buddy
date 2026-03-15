import { Link } from '@tanstack/react-router'

const items = [
    { to: '/inventory', label: 'Inventory' },
    { to: '/catalog', label: 'Catalog' },
    { to: '/events', label: 'Events' },
] as const

export function StartPage() {
    return (
        <section className="flex flex-1 flex-col justify-center gap-4">
            <div className="mb-2">
                <h1 className="text-2xl font-semibold tracking-tight">Artist Buddy</h1>
                <p className="text-sm text-muted-foreground">
                    Local-first tools for conventions and inventory.
                </p>
            </div>

            <div className="grid gap-3">
                {items.map((item) => (
                    <button key={item.to} className="h-14 justify-start text-base">
                        <Link to={item.to}>{item.label}</Link>
                    </button>
                ))}
            </div>
        </section>
    )
}