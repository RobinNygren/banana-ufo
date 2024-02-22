
const SpaceCraft = ({name, from}) => {
    return (
        <>
        <div className="SpaceCard">
        <div className="SpaceContainer">
        <h3>Name: {name}</h3>
        <p>From: {from}</p>
        </div>
        </div>
        </>
    );
};

export default SpaceCraft;