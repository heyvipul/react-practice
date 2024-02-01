import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import ThemeContextProvider from './components/theme-context'

function App() {

  return (
    <ThemeContextProvider>
        <BrowserRouter>
        
          {/* navbar */}
          <Navbar/>

          {/* routes */}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/blog' element={<Blog/>} />
          </Routes>
        </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
