import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./components/Landing";
import UserLayout from "./components/UserLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/user" exact element={<UserLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
