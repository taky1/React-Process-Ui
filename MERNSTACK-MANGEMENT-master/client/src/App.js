import React from "react";
import "./App.css";
import Main from "./components/Grid/Main";


import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider} from "react-dnd";



const App = () => {
  return (
    <div className="App">
 <DndProvider backend={HTML5Backend}>
                 <div>
                   <Main />
                </div>			
                	</DndProvider>

    </div>
  );
};

export default App;
