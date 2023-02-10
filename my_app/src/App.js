import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";



// Page Import 
import ReadPage from './Pages/ReadPage';
import CreatePage from './Pages/CreatePage';
import UpdatePage from './Pages/UpdatePage';




class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ReadPage />} />
                        <Route path="/Create" element={<CreatePage />} />
                        <Route path="/Update" element={<UpdatePage />} />
                    </Routes>
                </BrowserRouter>
        );
    }
}

export default App;
