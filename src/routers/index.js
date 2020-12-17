import React from "react";
import {
  BrowserRouter as Router,

  Route,
  Switch
} from "react-router-dom";
import Main from "../pages/layout/Main";
import MainAdmin from "../pages/layout/MainAdmin";
import CategoryAdmin from "../pages/view/Admin/Category/index.jsx";
import Dashboard from "../pages/view/Admin/Dashbroad";
import Food from "../pages/view/Admin/Food";
import Invoice from "../pages/view/Admin/Invoice";
import Login from "../pages/view/Admin/Login";
import MenuAdmin from '../pages/view/Admin/Menu/index';
import Statistics from "../pages/view/Admin/Statistics";
import Topping from "../pages/view/Admin/Topping";
import Checkout from "../pages/view/Main/Checkout";
import Contact from "../pages/view/Main/Contact";
import FoodDetail from "../pages/view/Main/FoodDetail";
import Home from "../pages/view/Main/Home";
import Product from "../pages/view/Main/Product";
import Category from "../pages/view/Main/ProductCategory";
import ProductSearch from "../pages/view/Main/ProductSearch";
import Profile from "../pages/view/Main/Profile";
import ProfileInvoice from "../pages/view/Main/Profile/ProfileInvoice";
import SearchComponent from "../pages/view/Main/Search/index";
import OAuth2RedirectHandler from "../pages/view/Main/User/OAuth2/OAuth2RedirectHandler";
// import Route from "./PrivateAdminRouter";
import PrivateRoute from "./PrivateRouter";


const Routers = () => {
  // if(isLogin){
  //     setCheck(true)
  // }
  // else(setCheck(false))

  return (
    <Router>
      <Switch>
        <Route path="/admin/login">
          <Login />
        </Route>
        <Route path="/admin/:path?/:path?" exact>
          <MainAdmin>
            <Switch>
              <Route path='/admin/' exact>
                <Dashboard/>
              </Route>
              <Route path="/admin/statistics" component={Statistics} >
             
              </Route>
              <Route path='/admin/topping' component={Topping}>

              </Route>
              <Route path="/admin/food"component={Food} >
              </Route>

              <Route path="/admin/category" component={CategoryAdmin}>
              </Route>
              <Route path="/admin/menu" component={MenuAdmin} >
             
              </Route>
              <Route path="/admin/invoice" component={Invoice}>
              </Route>
            </Switch>
          </MainAdmin>
        </Route>
        <Route>
          <Main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path='/contact'>
                <Contact/>
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/food/:id">
                <FoodDetail />
              </Route>
              <Route path="/profile" component={Profile} exact></Route>
              <Route
                path="/checkout"
                component={Checkout}
              ></Route>
              <Route
                path="/profile/order"
                component={ProfileInvoice}
              ></Route>

              <Route path="/category/:id">
                <Category />
              </Route>
              <Route path="/search/" exact>
                <SearchComponent />
              </Route>
              <Route path="/search/:key">
                <ProductSearch />
              </Route>
              <Route
                path="/oauth2/redirect"
                component={OAuth2RedirectHandler}
              ></Route>
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
