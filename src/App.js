import { Link, Route, Routes } from "react-router-dom";
import UseEffectPage from "./pages/UseEffectPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseRefPage from "./pages/UseRefPage";
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
          <li>
            <Link to={'/useref'}>Use Ref</Link>
          </li>
        </ol>
      </div>
      <Routes>
        <Route path={'/usestate'} element={<UseStatePage />} />
        <Route path={'/useeffect'} element={<UseEffectPage />} />
        <Route path={'/usereducer'} element={<UseReducerPage />} />
        <Route path={'/useref'} element={<UseRefPage />} />
      </Routes>
    </div>
  );
}

export default App;
