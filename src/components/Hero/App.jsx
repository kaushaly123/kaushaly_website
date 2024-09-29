import { BrowserRouter as Router, Route } from "react-router-dom"; // Import Router and Route
import Hero from "./Hero";

const App = () => {
    return (
      <Router>
        <Route path="/" element={<Hero />} />
      </Router>
    );
  };
  
  export default App;