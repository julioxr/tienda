// funciones que sirven de forma general
import { getTestItems } from "@/pages/api/items";
import { getItems } from "@/services/itemService";

export async function getPathsFromIds() {
    // const items = await getItems();
    const items = getTestItems();
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
    const items = getTestItems();
    const product = items.find((item) => convertToPath(item.title) === id);
    return {
        id,
        data: product,
    };
}

export function convertToPath(title) {
    return title.toLowerCase().replace(/\s/g, "-");
}
