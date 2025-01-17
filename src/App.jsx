import './App.css';
import UfoList from './components/UfoList/UfoList';
import Buttons from './components/Button/Button';
import InfoBox from './components/InfoBox/InfoBox';
import NavBar from './components/NavBar/NavBar';
import MonsterBox from './components/MonsterBox/MonsterBox';
import SpaceCraftBox from './components/SpaceCraftBox/SpaceCraftBox';


const App = () => {

    const rubrik = "hejsan";
    const age = 32;
    const checkAge = (age) => {
        if(age>=18)
        return "Välkommen!";
        else
        return "Hejdå!";
    }


    return (

        <>
        <header><h1>🍌 Spacecrafts! 🛸</h1></header>
        <NavBar />
        <section>
        <h2>{checkAge(age)}</h2>
        <InfoBox />
        </section>
        <UfoList/>
        <section className="ButtonsContainer">
        <Buttons/>
        </section>
        <MonsterBox/>
        <SpaceCraftBox/>
        </>
    )
       
}

export default App;