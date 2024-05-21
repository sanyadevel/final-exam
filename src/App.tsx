import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Title />
      <Cards />
    </div>
  );
}

export default App;
