import React from "react";
//import { useEffect, useState } from "react";

{/* Uncomment the code below if you want to use Router */}
{/*import {
    HashRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";*/}

//import axios from 'axios';

const App = () => {
     //const [stateName,setStateValue] = useState(false);

     // Load configuration data
     //useEffect(() => {
     //},[]);

     return (
          <>
               <div>App</div>

               {/* Uncomment the code below to use routing */}
               {/*
                    <HashRouter>
                         <Routes>
                              <Route path="/path1" element={
                                   <Component1  />
                                   }
                              />

                              <Route path="/path2" element={
                                   <Component2 />
                                   }
                              />

                              <Route
                                   path="*" element={<Navigate to="/path" replace />}
                              />
                         </Routes>
                    </HashRouter>
                */}
          </>
     );
}

export default App;
