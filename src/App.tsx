import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Album from "./pages/Album"
import Category from "./pages/Category"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:category" element={<Category />} />
          <Route path="/portfolio/:category/:album" element={<Album />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
