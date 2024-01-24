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
                < Route path="orders" element={<EcommerceReport />} />
                < Route path="invoices" element={<EcommerceReport />} />
                < Route path="incompleteOrders" element={<EcommerceReport />} />
                < Route path="orderReturns" element={<EcommerceReport />} />
                < Route path="products" element={<EcommerceReport />} />
                < Route path="productOptions" element={<EcommerceReport />} />
                < Route path="productCategories" element={<EcommerceReport />} />
                < Route path="productTags" element={<EcommerceReport />} />
                < Route path="productAttributes" element={<EcommerceReport />} />
                < Route path="brands" element={<EcommerceReport />} />
                < Route path="productCollections" element={<EcommerceReport />} />
                < Route path="productLabels" element={<EcommerceReport />} />
                < Route path="reviews" element={<EcommerceReport />} />
                < Route path="shipments" element={<EcommerceReport />} />
                < Route path="discounts" element={<EcommerceReport />} />
                < Route path="customers" element={<EcommerceReport />} />

              </Route>





              {/* Marketplace */}

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
