import Command from "./components/Command";
import Finance from "./components/Finance";
import Header from "./components/Header";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Reviews />
      <Command />
      <Finance />
    </div>
  );
}

export default App;
