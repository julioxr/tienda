// funciones que sirven de forma general
import { getItemsApi } from "@/pages/api/items";

export async function getPathsFromIds() {
    const items = getItemsApi();
    const ids = items.map((item) => {
        return {
            params: {
                id: convertToPath(item.title),
            },
        };
    });
    return ids;
}

export async function getItemData(id) {
    const items = getItemsApi();
    const product = items.find((item) => convertToPath(item.title) === id);
    return {
        id,
        data: product,
    };
}

export function convertToPath(title) {
    return title.toLowerCase().replace(/\s/g, "-");
}
