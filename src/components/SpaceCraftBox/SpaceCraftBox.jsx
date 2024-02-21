import SpaceCraft from "./../SpaceCraft/SpaceCraft";
import spacecraft from "./spacecraft.json";

const SpaceCraftBox = () => {
    const data = spacecraft.data;
    return (
        <>
        <h2>SpaceCraft Box</h2>
        {data.map((spacecraft)=>{
            return <SpaceCraft name={spacecraft.name} from={spacecraft.from}/>
        })}
        </>
    );
};

export default SpaceCraftBox;