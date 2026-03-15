import type { UUID, ISODateString } from '../shared/types.ts';
import type { StockMovementType } from '../shared/enums.ts';

export interface StockMovement {
    id: UUID;
    eventId: UUID | null;
    productId: UUID;
    type: StockMovementType;
    quantityDelta: number;
    reason: string | null;
    relatedSaleId: UUID | null;
    createdAt: ISODateString;
}