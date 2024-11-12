import Register from "./Register";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;
  return <Register />;
};

export default App;
