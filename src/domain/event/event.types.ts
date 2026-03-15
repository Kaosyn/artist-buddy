import type {ISODateString, UUID} from "../shared/types.ts";
import type {EventStatus} from "../shared/enums.ts";

export interface Event {
    id: UUID;
    name: string;
    venue: string;
    city: string;
    startDate: ISODateString;
    endDate: ISODateString;
    status: EventStatus;
    note: string | null;
}