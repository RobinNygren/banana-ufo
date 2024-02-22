import SpaceCraft from "./../SpaceCraft/SpaceCraft";
import spacecraft from "./spacecraft.json";
import "./SpaceCraft.css";

const SpaceCraftBox = () => {
    const data = spacecraft.data;
    return (
        <>
        <h2 className="SpaceCraftTitle">SpaceCraft Box</h2>
        <div className="SpaceCraftBox">
        {data.map((spacecraft)=>{
            return <SpaceCraft name={spacecraft.name} from={spacecraft.from}/>
        })}
        </div>
        </>
    );
};

export default SpaceCraftBox;