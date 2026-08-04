import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home/Home'
import Blog from './views/Blog/Blog'
import BlogDetail from './views/BlogDetail/BlogDetail'
import Navbar from './components/Navbar/Navbar'
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/:slug' element={<BlogDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App