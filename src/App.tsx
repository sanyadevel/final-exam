import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import './index.css';

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Title />
      <Cards />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
