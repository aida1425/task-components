import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  let users = [
    {
      name: "Aya",
      lastName: "Nasyrova",
      age: 27,
    },
    {
      name: "Oleg",
      lastName: "Smirnov",
      age: 30,
    },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
}

export default App;
