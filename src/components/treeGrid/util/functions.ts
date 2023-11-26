import { ItemTree, NewItemTree, Item } from './../types/Item';
import { Itens, ItensTree } from "../types/Itens";


export function transformListToTree(dataList: Itens): ItensTree{
    let res: ItemTree[] = new Array<ItemTree>

    for(let i=0; i<dataList.length; i++){
        let data = dataList[i];
        typedKeys(data).map(column => {
            if(Array.isArray(data[`${column}`])){
                delete data[`${column}`];
            }
        })

        dataList[i] = data;
    }

    res = <ItensTree>dataList;

    return res;
}

export function transformItemToTree(dataItem: Item): ItemTree{
    let res: ItemTree = NewItemTree;

        typedKeys(dataItem).map(column => {
            if(Array.isArray(dataItem[`${column}`])){
                delete dataItem[`${column}`];
            }
        })

    res = <ItemTree>dataItem;
    
    return res;
}

function typedKeys<T extends {}>(param: T): (keyof T)[] {
    let key = Object.keys(param) as (keyof T)[];
    return key;
}

export function createSubList(dataList: Item, key: string): Itens{
    let res: Item[] = new Array<Item>
    typedKeys(dataList).map(column => {
        if(column === key && Array.isArray(dataList[`${column}`])){
            let item = dataList[`${column}`];
            res = <Item[]>item
        }
    })

    return res;
}