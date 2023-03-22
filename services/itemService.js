import { getItemsApi } from "@/pages/api/items";

export function getLatestItems() {
    const items = getItemsApi();
    return items.slice(0, 3);
}
