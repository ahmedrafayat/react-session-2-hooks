import { Link, Route, Routes } from "react-router-dom";
import UseEffectPage from "./pages/UseEffectPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseStatePage from "./pages/UseStatePage";

function App() {
  return (
    <div>
      <h1>Welcome to React Session 2</h1>
      <div>
        <ol>
          <h3>Navigate to:</h3>
          <li>
            <Link to={'/usestate'}>Use State</Link>
          </li>
          <li>
            <Link to={'/useeffect'}>Use Effect</Link>
          </li>
          <li>
            <Link to={'/usereducer'}>Use Reducer</Link>
          </li>
        </ol>
      </div>
      <Routes>
        <Route path={'/usestate'} element={<UseStatePage />} />
        <Route path={'/useeffect'} element={<UseEffectPage />} />
        <Route path={'/usereducer'} element={<UseReducerPage />} />
      </Routes>
    </div>
  );
}

export default App;
