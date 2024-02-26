import "./App.css";
import Card from "./components/Card";
import Student from "./components/student";

function App() {
  let employes = [
    {
      name: "samim",
      dept: "cse",
    },
    {
      name: "samim",
      dept: "cse",
    },
    {
      name: "samim",
      dept: "cse",
    },
    {
      name: "samim",
      dept: "cse",
    },
  ];

  let student = [
    {
      name: "Samim",
      contact: 1234,
    },
    {
      name: "aktar",
      contact: 54462,
    },
    {
      name: "Rony",
      contact: 8975,
    },
    {
      name: "Jahaed",
      contact: 98776,
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold  bg-green-300 text-black mb-4">
        Tailwinds and props
      </h1>
      <div>
        <Card employeeName="Jahed Ali" />
        <Card employe={employes} />
      </div>

      <Student studentDetail={student} />
    </>
  );
}

export default App;
