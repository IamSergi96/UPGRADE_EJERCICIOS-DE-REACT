
import './App.css';
import Gallery from './component/Gallery';
import Header from './component/Header';
import Heading from './component/Heading';
import Promotion from './component/Promotion';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Promotion></Promotion>
      <Heading></Heading>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
