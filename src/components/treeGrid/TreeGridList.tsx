import React, { Children, useEffect, useState } from "react";
import { ItemTree } from "./types/Item";
import { ItensTree } from "./types/Itens";


interface IProps{
    jsonListData: ItensTree;
    tittle: string;
    columns: string[];
    children?: React.ReactNode
}


export default function TreeGridList({ jsonListData, tittle, columns, children } : IProps) {

    const [list, setList] = useState(new Array<ItemTree>)
    const [open, setOpen] = useState(true)

    useEffect(() => {
        if(Array.isArray(jsonListData)){
            setList(jsonListData);
        }
    }, [])

    function typedKeys<T extends {}>(param: T): (keyof T)[] {
            let key = Object.keys(param) as (keyof T)[];

            for(let i=0; i<key.length; i++){
                if(Array.isArray(key[i])){
                    key.splice(i, 1);
                }
            }

            return key;
    }

  return (
    <>
        <tr onClick={() => setOpen(!open)}><td colSpan={columns.length}>{tittle}</td></tr>
        {open ? 
            <>
                {list.map(item => 
                    <tr key={item.id}>
                        {typedKeys(item).map(column => 
                            <td key={`${item.id}-${column}`}> { item[`${column}`]} </td>
                        )}
                    </tr>
                )}
                {children ? children : null}
            </>
            : null
        }
        
    </>

  )
}
