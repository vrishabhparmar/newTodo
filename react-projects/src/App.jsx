import TodoComponent from './components/TodoComponent'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contacts'
import { Products } from './pages/Products'

function App() {
    return(
      <div className='app'>
         <Navbar/>
         <div className='container'>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
         </Routes>
         </div>
      </div>
    )
}

export default App
