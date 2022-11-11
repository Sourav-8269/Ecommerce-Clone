import logo from './logo.svg';
import './App.css';
import WithSubnavigation from './Components/Navbar';
import DrawerExample from "./Components/Drawer"
import Home from './Components/Home/Home';
import { Box } from '@chakra-ui/react';
import AuthContextProvider from './Components/Context/AuthContext';

import AllRoutes from './Components/Routes/Routes';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>

        <WithSubnavigation/>
        {/* <Home/> */}
        <AllRoutes/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
