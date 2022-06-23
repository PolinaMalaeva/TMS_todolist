import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import PageMain from "./Components/Main/PageMain";
import PageTodoList from "./Components/Todolist/PageTodoList";
import PageStatistics from "./Components/Statistics/PageStatistics";
import Navigation from "./Components/Nav/Navigation";
import {useSelector} from "react-redux";

function App() {
    const isHidden = useSelector((store: any) => store.navAndTasks.isHidden);

    return (
        <BrowserRouter>
            <div className='wrap'>
                <Navigation/>
                <div className='main' style={{paddingLeft: (isHidden) ? '240px' : ''}}>
                    <Routes>
                        <Route path="/" element={<PageMain/>}/>
                        <Route path="/PageTodoList" element={<PageTodoList/>}/>
                        <Route path="/PageStatistics" element={<PageStatistics/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
