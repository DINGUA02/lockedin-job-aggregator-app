import { Routes,Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Favorites } from "./pages/Favorites"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"


function App() {

  return (
    <>

    <Header />

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Favorites" element={<Favorites/>}/>
    </Routes>
    <Footer />

    

  


  
    </>
  )
}

export default App
