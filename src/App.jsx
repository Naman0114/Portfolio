import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from "./Components/Footer/Footer"
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import './index.css'

function App() {

  return (
    <>
    <div>
      <Navbar></Navbar>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>  
    </>
  )
}


export default App
