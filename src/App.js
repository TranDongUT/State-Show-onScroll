import "./App.css";
import "./containers/style/GlobalStyle.module.scss";
import Home from "./containers/Home";
import Title from "./containers/Title";
import Team from "./containers/Team";
function App() {
  return (
    <div className="App">
      <Home />
      <Title />
      <Team />
    </div>
  );
}

export default App;
