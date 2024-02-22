import Monster from "./../Monster/Monster";
import monster from "./monster.json";
import "./MonsterBox.css";


const MonsterBox = () => {
    const data = monster.data;
    return (
        <>
        <h2 className="MonsterTitle">Monster Box</h2>
        <div className="MonsterBox">
        {data.map((monster)=>{
            return <Monster name={monster.name} eyes={monster.eyes} attribute={monster.attribute} image={monster.image}/>
        })}
        </div>
        </>
    );
}

export default MonsterBox;