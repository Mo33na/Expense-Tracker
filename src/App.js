import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/add-expense' exact element={<AddExpense />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

