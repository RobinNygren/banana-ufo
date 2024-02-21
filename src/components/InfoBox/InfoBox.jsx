import "./InfoBox.css";

const data = [
    {
        name: "Anja",
        age: 32,
        student: true
    },
    {
        name: "Olle",
        age: 45,
        student: true
    },
    {
        name: "Kalle",
        age: 52,
        student: false
    },
]
const Student = () => {
    return <p className="InfoBox">{data[0].student ? `Student: ${data[0].name}, Age: ${data[0].age}` : "-"}</p>;
}

export default Student;