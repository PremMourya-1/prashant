
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Banner from './Jsx/Banner'
import BestPrices from './Jsx/BestPrices'
import Services from './Jsx/Services'
import Slider from './Jsx/Slider'

function App() {

  return (
    <>
      <ToastContainer />

      <Header />
      <Slider />
      <Services />
      <BestPrices />
      <Banner />
      <Footer />
    </>
  )
}

export default App
