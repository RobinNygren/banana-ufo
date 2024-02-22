
const Monster = ({name, eyes, attribute, image}) => {
    return (
        <>
        <div className="MonsterCard">
            <img className="MonsterImg" src={image} alt="" />
        <div className="MonsterContainer">
        <h3>{name}</h3>
        <p>{attribute}</p>
        <p>Eyes: {eyes}</p>
        </div>
        </div>
        </>
        );
}

export default Monster;