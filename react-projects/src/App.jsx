import TodoComponent from './components/TodoComponent'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contacts'
import { Products } from './pages/Products'
import { RootLayout } from './layout/RootLayout'
import { ProjectLayout } from './layout/ProjectLayout'
import { NotFound } from './components/NotFound'
import { Jobs, jobsLoader } from './pages/Jobs'
import { JobsLayout } from './layout/JobsLayout'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'

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
          <Route path="jobs" element={<JobsLayout />} errorElement={<Error/>}>
              <Route index element={<Jobs/>} loader={jobsLoader} />
              <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader} />
          </ Route>
          <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
    return(
      <RouterProvider router={router} />
    )
}

export default App
