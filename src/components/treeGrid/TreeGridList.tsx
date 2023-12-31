import React, { useEffect, useState } from "react";
import { ItemTree, NewItemTree } from "./types/Item";
import styled from "styled-components";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";


interface IProps{
    jsonListData: ItemTree;
    tittle?: string;
    columns: string[];
    children?: React.ReactNode
}

const ExpandTittle = styled.tr`
    text-align: left;
    :hover{
        background-color: #585858;
    }
    :active{
        background-color: #3d3d3d;
    }
`
const ExpandTd = styled.td`
   border-radius: 5px;
`


export default function TreeGridList({ jsonListData, tittle, columns, children } : IProps) {

    const [item, setItem] = useState(NewItemTree)
    const [open, setOpen] = useState(true)

    useEffect(() => {
        setItem(jsonListData);
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
        <ExpandTittle onClick={() => setOpen(!open)}>
            <ExpandTd colSpan={columns.length}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{fontSize: '1.5rem', display: 'flex', alignItems: 'center'}}>{open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}</span>
                    {tittle}
                </div>
            </ExpandTd>
        </ExpandTittle>
        {open ? 
            <>
            <tr key={item.id}>
                    {typedKeys(item).map(column => 
                        <td key={`${item.id}-${column}`}> { item[`${column}`]} </td>
                    )}
                </tr>
                {/* {list.map(item => 
                    <tr key={item.id}>
                        {typedKeys(item).map(column => 
                            <td key={`${item.id}-${column}`}> { item[`${column}`]} </td>
                        )}
                    </tr>
                )} */}
                {children ? children : null}
            </>
            : null
        }
        
    </>

  )
}
