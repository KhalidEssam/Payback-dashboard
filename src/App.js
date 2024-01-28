import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar'
import Topbar from './components/topbar'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from 'react';
import EditProfileForm from "./pages/Profile";
import Dashboard from './pages/Dashboard';
import Team from './pages/Team/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotFound from './pages/NotFound';
import Buttombar from "./components/Buttombar";
import Bar from './pages/Bar/index'
import Pie from './pages/pie/index'
import Line from './pages/line/index'
import Contacts from './pages/contacts/index'
import Invoice from "./pages/Invoice/index";
import EcommerceReport from "./pages/Ecommerce/Report";
import FlashSales from "./pages/Ecommerce/FlashSales";
import Orders from "./pages/Ecommerce/Orders";
import Invoices from "./pages/Ecommerce/Invoices";
import OrderReturns from "./pages/Ecommerce/OrderReturns";
import Products from "./pages/Ecommerce/Products";
import ProductsOptions from "./pages/Ecommerce/ProductOptions";
import IncompleteOrders from "./pages/Ecommerce/IcompleteOrders";
import { mockDataInvoices, mockDataInvoicescolumns } from "./data/mockData";
import ProductCategories from "./pages/Ecommerce/ProductCategory";
import ProductTags from "./pages/Ecommerce/ProductTags";
import ProductAttributes from "./pages/Ecommerce/ProductAttributes";
import Brands from "./pages/Ecommerce/Brands";
import ProductCollection from "./pages/Ecommerce/ProdcutCollection";
import ProductLabels from "./pages/Ecommerce/ProductLabel";
import ReviewsPage from "./pages/Ecommerce/Reviews";
import Shipments from "./pages/Ecommerce/Shippments";
import Discounts from "./pages/Ecommerce/Discounts";
import Customers from "./pages/Ecommerce/Customers";
import Pages from "./pages/Ecommerce/SidebarPages/Pages";
import Reports from "./pages/Marketplace/Reports";
import SystemPage from "./pages/PlatformAdmin/Admin";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [selected, setSelected] = useState(" ");
  const Rout_URL = window.location.pathname.replace("localhost:3000", "");

  useEffect(() => {
    // Update the selected state based on the current route
    const currentRoute = window.location.pathname.replace("localhost:3000", "");
    const CcurrentRoute = currentRoute.charAt(1).toUpperCase() + currentRoute.slice(2);
    // console.log(CcurrentRoute)
    setSelected(CcurrentRoute);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div className="d-none d-md-block " >
            <Sidebar isSidebar={isSidebar} height={"100"} selected={selected} setSelected={setSelected} />
          </div>

          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="h6 m-4 ">
              {(Rout_URL.length > 1 && Rout_URL.toUpperCase().split('').join(' ')) || "H O M E"}
            </div>
            <div className="alert d-block d-md-none alert-warning" role="alert">
              For full functionality, please use a pc screen
            </div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team headerIsVisible={true} />} />
              <Route path="/form" element={<EditProfileForm />} />
              {/* E-COMMERCE */}
              <Route path="/ecommerce">
                < Route path="report" element={<EcommerceReport />} />
                < Route path="flashSales" element={<FlashSales />} />
                < Route path="orders" element={<Orders />} />
                < Route path="invoices" element={<Invoices />} />
                < Route path="incompleteOrders" element={<IncompleteOrders IncompleteHeader={mockDataInvoicescolumns}
                  IncompleteData={mockDataInvoices} />} />
                < Route path="orderReturns" element={<OrderReturns />} />
                < Route path="products" element={<Products />} />
                < Route path="productOptions" element={<ProductsOptions />} />
                < Route path="productCategories" element={<ProductCategories />} />
                < Route path="productTags" element={<ProductTags />} />
                < Route path="productAttributes" element={<ProductAttributes />} />
                < Route path="brands" element={<Brands />} />
                < Route path="productCollections" element={<ProductCollection />} />
                < Route path="productLabels" element={<ProductLabels />} />
                < Route path="reviews" element={<ReviewsPage />} />
                < Route path="shipments" element={<Shipments />} />
                < Route path="discounts" element={<Discounts IncompleteHeader={mockDataInvoicescolumns} />} />
                < Route path="customers" element={<Customers />} />

              </Route>


              <Route path="/pages" element={<Pages />} />

              {/* Marketplace */}

              <Route path="/marketplace">
                < Route path="reports" element={<Reports />} />

              </Route>

              <Route path="platform-admin" element={<SystemPage />} />

              <Route path="/invoices" element={<Invoice headerIsVisible={true} />} />
              <Route path="/contacts" element={<Contacts headerIsVisible={true} />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />

              <Route path="*" element={<NotFound selected={selected} setSelected={setSelected} />} />
            </Routes>
            <div className=" d-md-none ">
              <Buttombar />
            </div>
          </main>


        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
