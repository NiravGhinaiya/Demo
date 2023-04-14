import './App.css';
import React from 'react';
import { backArray, frontArray } from './component/back'
import './component/sass/sass.css'


function App() {
  return (

    backArray.map((ele, i) => {
      document.documentElement?.style.setProperty(`--${ele.Components}`, ele.bkc)
      return (
        frontArray.map((a) => {
          return (
            ele.Components === a.unid
              ? a.Components
              : null
          )})
      )})

  );
}

export default App;
