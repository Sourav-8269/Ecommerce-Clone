import logo from './logo.svg';
import './App.css';
import WithSubnavigation from './Components/Navbar';
import DrawerExample from "./Components/Drawer"
import Home from './Components/Home/Home';
import { Box } from '@chakra-ui/react';

import AllRoutes from './Components/Routes/Routes';

function App() {
  return (
    <div className="App">

        <WithSubnavigation/>
      {/* <Home/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
