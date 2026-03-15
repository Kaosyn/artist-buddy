import type { UUID, ISODateString } from '../shared/types.ts';
import type { PaymentMethod, SaleType } from '../shared/enums.ts';

export interface Sale {
    id: UUID;
    eventId: UUID | null;
    paymentMethod: PaymentMethod;
    saleType: SaleType;
    createdAt: ISODateString;
    note: string | null;
}