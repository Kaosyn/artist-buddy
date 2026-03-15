import type {ISODateString, UUID} from "../shared/types.ts";

export interface Product {
    id: UUID;
    name: string;
    tagIds: UUID[];
    sku: string | null;
    isInventoryTracked: boolean;
    isActive: boolean;
    createdAt: ISODateString;
    updatedAt: ISODateString;
}