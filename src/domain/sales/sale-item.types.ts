import type { UUID } from '../shared/types.ts';

export interface SaleItem {
    id: UUID;
    saleId: UUID;
    productId: UUID;
    quantity: number;
    unitPrice: number;
    unitDiscount: number;
    total: number;
}