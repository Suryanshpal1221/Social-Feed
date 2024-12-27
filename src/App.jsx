import styles from "./App.module.css";
import { Homepage, LoginPage, SignupPage } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

function App() {
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
