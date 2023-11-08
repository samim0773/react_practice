import "./App.css";
import Card from "./components/Card";

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

  return (
    <>
      <h1 className="text-3xl font-bold  bg-green-300 text-black mb-4">
        Tailwinds and props
      </h1>
      <div>
        <Card employeeName="Jahed Ali" />
        <Card employe={employes} />
      </div>
    </>
  );
}

export default App;
