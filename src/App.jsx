import { Switch, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import PageContent from './layout/PageContent'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/product/:id" component={ProductDetailPage} />
        </Switch>
      </PageContent>
      <Footer />
    </div>
  )
}

export default App