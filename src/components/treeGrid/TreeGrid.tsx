
import styled from "styled-components"

interface ITreeGridProps{
    children?: React.ReactNode
    columns: string[]
}

const TablePersonalizada = styled.table`
    background-color: red;
`


export default function TreeGrid({ columns, children } : ITreeGridProps) {
  return (
    <div>TreeGrid
        
        <TablePersonalizada>
            <thead>
                <tr>
                    {columns.map(column => 
                        <th key={column}> {column} </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </TablePersonalizada>
    </div>
  )
}
