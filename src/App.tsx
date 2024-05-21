import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Title />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
