export type Item = object & {
    id: number;
    [key: string]: string | number | boolean | Array<Item>
}

export type ItemTree = object & {
    id: number;
    [key: string]: string | number | boolean
}

export const NewItemTree: ItemTree = {
    id: 0
}