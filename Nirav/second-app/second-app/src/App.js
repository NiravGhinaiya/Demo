import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Rfile/Home'
import Aboutus from './Component/Rfile/Aboutus'

// import Menubar from './Component/Demo/Menubar';
import Formres from './Component/Res-Demo/Formres';
// import Test from './Component/Res-Demo/Test';
// import Res from './Component/Res';
// import Registration from './Component/Registration ';
// import Demo1 from './Component/Demo1';
// import Text from './Component/Text';
import Todo from './Component/TodoList/Todo';
// import Checkbox from './Component/Checkbox';
// import Apicall from './Component/Apicall';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='Aboute' element={ <Aboutus /> } />
      </Routes> */}

      {/* <Menubar /> */}

        {/* <Formres /> */}
      {/* <Test /> */}
      {/* <Res /> */}
      {/* <Registration /> */}
      {/* <Demo1 /> */}
      {/* <Text /> */}
      {/* <Checkbox /> */}
      {/* <Apicall /> */}
      <Todo />
    </>
  );
}

export default App;
