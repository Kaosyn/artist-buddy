import type {ISODateString, UUID} from "../shared/types.ts";
import type {Currency} from "../shared/enums.ts";

export interface ProductPrice {
    id: UUID;
    productId: UUID;
    amount: number;
    currency: Currency;
    validFrom: ISODateString;
    validTo: ISODateString | null;
    createdAt: ISODateString;
}