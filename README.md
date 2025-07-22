# React Todo + React Router

## Steps for creating a new React App

npm create vite@latest react-projects -- --template react

## Todo App

Application which allows the user to add, delete, and update the entry

### Features

1. Add
2. Delete
3. Edit (Mark as complete or edit the entry)
4. List all todos

### Tech Stack

1. React + Hooks

### Steps to build a react app

1. Break the UI into component heirarchy

TodoCompenent
    |-->    Header  
    |-->    Add item 
    |-->    Todo List
                |-->  listItem 

2. Build a Static version of the react

3. Find the minimal but complete representation of the UI state

Here we need to store all the list items and it can be changed by editing a paricular item 

We can also add a new item to the list as well as delete it. 

Initially we will have empty todo list. 


4. Identify where your state should live

    For the todo app state doesn't flow down because we are placing all the elements in same components

5.  Add inverse data flow

## React Router

To add routing service to you react application you can use 'react-router-dom'. Import Browser router from react-router-dom then surround the <App /> component with it. 

```Javascript 
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
) 
```

Create a Navbar component to set the Navigation service, Import Navlink form react-router-dom. <Navlink /> is a better option than <Link /> because it helpes the browser detect which link or tab is currently acrive and hence can be showed.

We can use the CSS active property to display 

```CSS 
a.active{
  color: #02A1BD;
}
```
Import Navlink for building navigation

```Javascript  
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={svg} alt='logo'></img>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/projects'><li>Projects</li></NavLink>
            <NavLink to='/contacts'><li>Contacts</li></NavLink>
        </ul>
        <button>Get Started</button>
    </div>
  )
}
```

Import Routes, Route from 'react-router-dom' 

```Javascript 
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
```

## React Router Part-II

Create a folder named 'layout' and then create a new file name 'RootLayout.jsx'. which will act as a root link for all the other pages. Import <Outlet /> from react-router-dom which will be used as placeholder for routes we will be creating further.

```Javascript 

import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
        
    </div>
  )
}

```

Another way to create the router service is using createBrowserRouter(). Import createBrowserRouter(), createRoutesFromElements(), RouterProvider

```Javascript 

import TodoComponent from './components/TodoComponent'
import { Navbar } from './components/Navbar'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contacts'
import { Products } from './pages/Products'
import { RootLayout } from './layout/RootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="contacts" element={<Contacts/>}/>
      </Route>
    )
  )
    return(
      <RouterProvider router={router} />
    )
}

export default App

```
Remove <BrowserRouter /> surrounding the <App /> from main.jsx

## useNavgigate hook

We can use 'useNavigate' hook to create links for some sepate buttons which will redirect outside the current application.

```Javascript 

import React from 'react'
import svg from '../assets/react.svg'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <img src={svg} alt='logo'></img>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/projects'><li>Projects</li></NavLink>
            <NavLink to='/contacts'><li>Contacts</li></NavLink>
        </ul>
        <button onClick={() => navigate('/projects',{replace:true})}>Get Started</button>
    </div>
  )
}


```

{replace:true} will change the current navigation history will the mentioned path '/project' 


## Nested Navigation 

Inside the project page I have created route for Todo app. 

```Javascript 

import TodoComponent from './components/TodoComponent'
import { Navbar } from './components/Navbar'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contacts'
import { Products } from './pages/Products'
import { RootLayout } from './layout/RootLayout'
import { ProjectLayout } from './layout/ProjectLayout'

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
      </Route>
    )
  )
    return(
      <RouterProvider router={router} />
    )
}

export default App


```
Usse 'useNavigation' hook to redirect it to the todo component

```Javascript

import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Projects = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Projects Page</h1>
      <div className="project-nav">
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate('todo')}>Todo</button>
      </div>
    </div>
  )
}


```


