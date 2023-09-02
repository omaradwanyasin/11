import "./App.css";
import { Post } from "./components/Post";
import Header from "./components/Header";
import Btn from "./components/Btn";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contanier">
        <div className="Posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="btns">
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
        </div>
      </div>
    </div>
  );
}

export default App;
