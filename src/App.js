import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Items from './components/Items/Items'
import Wallpaper from './components/Wallpaper/Wallpaper'
import Footer from './components/Footer/Footer'

const App = () => (
  <div>
    <Navbar />
    <Items />
    <Wallpaper />
    <Footer />
  </div>
)
export default App
