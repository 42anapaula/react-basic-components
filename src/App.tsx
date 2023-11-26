import './App.css'
import TreeGrid from './components/treeGrid/TreeGrid'
import TreeGridList from './components/treeGrid/TreeGridList'
import { Itens } from './components/treeGrid/types/Itens'
import { transformListToTree } from './components/treeGrid/util/functions'


function App() {
  

  const columns = ['ID', 'Product Name', 'Quanity', 'Value', 'Total']
  const columnsList = ['id', 'productName', 'quantity', 'value', 'total']
  const mainList: Itens = [
    {
      id: 1,
      productName: 'Product 1',
      quantity: 2,
      value: 30.00,
      total: 60.00,
      product: [
        {
          id: 1,
          productName: 'Product 1 sub',
          quantity: 2,
          value: 30.00,
          total: 60.00,
        }
      ]
    },
    {
      id: 2,
      productName: 'Product 2',
      quantity: 1,
      value: 20.00,
      total: 20.00
    }
  ]


  return (
    <>
      <div>
        List of conponents
        <TreeGrid columns={columns}>
          <TreeGridList jsonListData={transformListToTree(mainList)} tittle='Products' columns={columns}>  
            <TreeGridList jsonListData={transformListToTree(mainList)} tittle='Products' columns={columns} />  
          </TreeGridList>
        </TreeGrid>
      </div>
    </>
  )
}

export default App
