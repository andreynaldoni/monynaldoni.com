import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Category from './pages/Category'
import Album from './pages/Album'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:category" element={<Category />} />
          <Route path="/portfolio/:category/:album" element={<Album />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
