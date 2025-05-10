import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipPercentageForTotals from './components/TipPercentageForTotals';
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'

function App() {

  const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-500 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Productos y Consumos</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className='p-5'>
          <h2 className="text-4xl font-black"> Menú </h2>
          <div className='mt-10 space-y-3'>
            {menuItems.map((item) => (<MenuItem key={item.id} item={item} addItem={addItem} />))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 rounded-lg space-y-10 p-5">
          {
            order.length === 0 ?
              <p className="text-center"> La orden esta vacía </p> : (
                <>
                  <OrderContents
                    order={order}
                    removeItem={removeItem}
                  />
                  <TipPercentageForTotals
                    setTip={setTip}
                    tip={tip}
                  />
                  <OrderTotals
                    order={order}
                    tip={tip}
                    placeOrder={placeOrder}
                  />
                </>
              )
          }
        </div>
      </main>
    </>
  )
}

export default App
