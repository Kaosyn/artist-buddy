export const CURRENCIES = ['EUR', 'USD'] as const;
export type Currency = (typeof CURRENCIES)[number];

export const EVENT_STATUSES = [
    'planned',
    'active',
    'completed',
    'archived',
    'cancelled',
] as const;
export type EventStatus = (typeof EVENT_STATUSES)[number];

export const PAYMENT_METHODS = ['cash', 'card', 'paypal'] as const;
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export const STOCK_MOVEMENT_TYPES = [
    'initial',
    'restock',
    'sale',
    'refund',
    'correction',
    'damaged',
    'gift',
] as const;
export type StockMovementType = (typeof STOCK_MOVEMENT_TYPES)[number];