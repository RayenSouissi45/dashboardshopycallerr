import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Test from '../pages/test';
import Products from '../pages/products';
import Statistics from '../pages/statistics';
import Commercial from '../pages/commercial';
import Clients from '../pages/clients';
import Orders from '../pages/orders';

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Commercial" element={<Commercial />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/signIn" element={<SignIn/>} />

    </Routes>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default Router;
