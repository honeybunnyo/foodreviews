import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome/Welcome'
import Recipes from './pages/Recipes/Recipes'
import Restaurants from './pages/Restaurants/Restaurants'
import Contacts from './pages/Contacts/Contacts'

function App() {

  return (
    <> 
      <Routes>
        <Route path ='/' element = {<Welcome/>}/>
        <Route path ='/Recipes' element = {<Recipes/>}/>
        <Route path ='/Restaurants' element = {<Restaurants/>}/>
        <Route path ='/Contact' element = {<Contacts/>}/>
      </Routes>
    </>
  )
}

export default App
