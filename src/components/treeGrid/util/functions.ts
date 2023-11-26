import { ItemTree, ItemTreeClass } from "../types/Item";
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

function typedKeys<T extends {}>(param: T): (keyof T)[] {
    let key = Object.keys(param) as (keyof T)[];
    return key;
}

function criarSubList(nivel: number){

}