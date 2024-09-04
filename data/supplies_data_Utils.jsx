import materialsList from "./supplies_data";

export function getMaterialsList() {
    return materialsList;
}

export function getMaterialById(id) {
    return materialsList.find((material) => material.id === id);
}

export function filterMaterialsByKeywords(keyword) {
    return materialsList.filter((item) => item.name
        .toLowerCase()
        .includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase()));
}

export function updateMaterialQuantity(id, quantity) {
    const material = materialsList.find((material) => material.id === id);
    material.quantity = quantity;
}

export function updateMaterialsList(id, name, description, quantity) {
    const material = materialsList.find((material) => material.id === id);
    material.name = name;
    material.description = description;
    material.quantity = quantity;
}

export function pushMaterialToList(id, name, description, quantity) {
    materialsList.push({id, name, description, quantity });
    materialsList.sort((a, b) => a.id.localeCompare(b.id));
}

export function deleteMaterialFromList(id) {
    const index = materialsList.findIndex((material) => material.id === id);
    materialsList.splice(index, 1);
}
