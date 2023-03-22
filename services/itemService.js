import { getItemsApi } from "@/pages/api/items";

// export async function getItems() {
//     const request = await fetch("http://localhost:3000/api/items");
//     const items = await request.json();

//     return items;
// }

export function getLatestItems() {
    const items = getItemsApi();
    return items.slice(0, 3);
}
