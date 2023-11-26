
import styled from "styled-components"

interface ITreeGridProps{
    children?: React.ReactNode
    columns: string[]
}

const TablePersonalizada = styled.table`
    padding: 10px;
    background-color: grey;
    border-radius: 5px;
    td{
        padding: 5px;
    }
`

const HeadPersonalizada = styled.thead`
    
`


export default function TreeGrid({ columns, children } : ITreeGridProps) {
  return (
    <div>TreeGrid
        
        <TablePersonalizada>
            <HeadPersonalizada>
                <tr>
                    {columns.map(column => 
                        <th key={column}> {column} </th>
                    )}
                </tr>
            </HeadPersonalizada>
            <tbody>
                {children}
            </tbody>
        </TablePersonalizada>
    </div>
  )
}
