import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              {/*

              When using react-router-dom in a project, you'd use "link" tag
              instead of "a"(anchor tag), and "to" instead of "href".

              <a href="/">React Shopping Cart</a> */}
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Routes>
                {/* 
                
                "component" in line 31 and 32 is deprecated and has been replaced by 
                "element", as shown in line 33 and 34
                
                <Route path="/admin" component={AdminScreen} />
                <Route path="/" component={HomeScreen} exact /> */}
                <Route path="/admin" element={<AdminScreen />} />
                <Route path="/" element={<HomeScreen />} exact />
              </Routes>

            </main>
            <footer>All right is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
