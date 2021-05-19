import Layout from "./components/Layout/Layout";
import "./App.css";

import Cards from "./components/Cards/Cards";
import Illustration from "./components/Illustration/Illustration";

function App() {
  return (
    <Layout>
      <div className="App">
        <Cards />
        <Illustration />
      </div>
    </Layout>
  );
}

export default App;
