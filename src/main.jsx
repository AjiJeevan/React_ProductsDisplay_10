import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductsListing from './pages/productsListing.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <>
    <ProductsListing />
  </>,
)
