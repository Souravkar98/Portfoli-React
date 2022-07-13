import Navbar from './component/Navbar'
import Home from './component/Home'
import SocialLink from './component/SocialLink';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Skill from './component/Skill'
import Contact from './component/Contact';


function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <SocialLink/>
        <About/>
        <Portfolio/>
        <Skill/>
        <Contact/>
    </div>
  );
}

export default App;
