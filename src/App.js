
import './App.css';
import Header from './component /header/header';
import HeroSlideShow from './component /hero/hero';


function App() {
  return (
    <div className="App">
    <Header/>
    <HeroSlideShow interval={14000}/>
    </div>
  );
}

export default App;
