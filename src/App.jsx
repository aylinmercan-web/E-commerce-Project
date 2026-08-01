import Header from './layout/Header'
import Footer from './layout/Footer'
import PageContent from './layout/PageContent'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent>
        <HomePage />
      </PageContent>
      <Footer />
    </div>
  )
}

export default App