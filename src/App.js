import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes> /* Root route to homepage */
  );
};

export default App;
