import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home/Home'
import Blog from './views/Blog/Blog'
import BlogDetail from './views/BlogDetail/BlogDetail'
import MobilList from './views/MobilList/MobilList'
import MobilDetail from './views/MobilDetail/MobilDetail'
import Navbar from './components/Navbar/Navbar'
import ScrollToHash from './components/ScrollToHash'
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <ScrollToHash/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/:slug' element={<BlogDetail/>}/>
          <Route path='/mobil' element={<MobilList/>}/>
          <Route path='/mobil/:slug' element={<MobilDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App