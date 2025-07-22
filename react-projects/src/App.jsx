import TodoComponent from './components/TodoComponent'
import { Navbar } from './components/Navbar'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contacts'
import { Products } from './pages/Products'
import { RootLayout } from './layout/RootLayout'
import { ProjectLayout } from './layout/ProjectLayout'
import { NotFound } from './components/NotFound'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home/>}/>
          <Route path="projects" element={<ProjectLayout/>}>
              <Route path='todo' element={<TodoComponent/>}/>
          </Route>
          <Route path="products" element={<Products/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
    return(
      <RouterProvider router={router} />
    )
}

export default App
