import { Route, Routes } from "react-router-dom"
import Navigation from "./views/NavigationBar"
import Homepage from "./views/Homepage"
import ExcercisePage from "./views/ExcercisePage"


const App = () => {

  return (
    <>
    <Navigation />
      <Routes>
          <Route path='/' element={<Homepage /> } />
          <Route path='/exercises' element={<ExcercisePage /> } />       
      </Routes>
    
      </>
  )
}

export default App