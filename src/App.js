import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import AllSections from './AllSections'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import useSticky from "./hooks/useSticky.js"
import Footer from './components/Footer'

function App() {
  const { isSticky, element } = useSticky()

  return (
    <div className="App">

      <Banner/>
      {/* <img src={ilikeyou1} style={{width: '100vw', height: 'auto'}}></img> */}
      <Navbar sticky={isSticky} />
      <AllSections element={element}/>
      <Footer/>
      
    </div>
  );
}

export default App;
