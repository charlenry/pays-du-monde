import PaysManager from "./containers/PaysManager/PaysManager";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/portfolio/pays-du-monde">
      <Routes>
        <Route path="/" element={<PaysManager />} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
