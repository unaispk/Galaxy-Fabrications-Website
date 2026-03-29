import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsApp from './components/WhatsApp'




function App() {
  return (
    <>
      {/* Fixed Header Wrapper */}
      <div className="fixed-header">
        <Header />
        <Navbar />
      </div>

      {/* Scrollable Content */}
      <main className="page-content">
        <Hero />
        <About />
        <Contact />
        {/* Services, Projects later */}
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsApp />
    </>
  )
}

export default App
