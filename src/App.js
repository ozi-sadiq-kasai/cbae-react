import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Main  from './../src/components/pages/Main'
import Drinks  from './../src/components/pages/Drinks'
import Dessert  from './../src/components/pages/Dessert'
import SharedLayout  from './../src/components/pages/SharedLayout'

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<SharedLayout/>}>
     <Route index element={<Main/>}/>
     <Route path="drinks" element={<Drinks />}/>
     <Route path="dessert" element={<Dessert />}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App
