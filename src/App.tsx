import './App.css'
import TreeGrid from './components/treeGrid/TreeGrid'
import TreeGridList from './components/treeGrid/TreeGridList'
import TreeGridSubList from './components/treeGrid/TreeGridSubList'
import { Itens } from './components/treeGrid/types/Itens'
import { createSubList, transformItemToTree, transformListToTree } from './components/treeGrid/util/functions'


function App() {
  

  const columns = ['ID', 'Product Name', 'Quantity', 'Value', 'Total']
  const mainList: Itens = [
    {
      id: 1,
      productName: 'Product 1',
      quantity: 2,
      value: 30.00,
      total: 60.00,
      products: [
        {
          id: 1,
          productName: 'Product 1 sub',
          quantity: 2,
          value: 30.00,
          total: 60.00,
        },
        {
          id: 2,
          productName: 'Product 2 sub',
          quantity: 3,
          value: 30.00,
          total: 90.00,
        }
      ]
    }
  ]

  const subList1 = createSubList(mainList[0], 'products');

  return (
    <>
      <div>
        List of conponents
        <TreeGrid columns={columns}>
          {mainList.map(itemList => 
            <TreeGridList jsonListData={transformItemToTree(itemList)} tittle='Products' columns={columns} key={itemList.id}>
                <TreeGridSubList jsonListData={transformListToTree(subList1)} columns={columns} tittle='Subs Products'>
                <TreeGridSubList jsonListData={transformListToTree(subList1)} columns={columns} tittle='Teste Subs Products'/>
                </TreeGridSubList>  
            </TreeGridList>
          )}
          
        </TreeGrid>
      </div>
    </>
  )
}

export default App
