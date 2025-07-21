# React Todo + Reat Router

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

### React Router

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







