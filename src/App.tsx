import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import PageMain from "./Components/Main/PageMain";
import PageTodoList from "./Components/Todolist/PageTodoList";
import PageStatistics from "./Components/Statistics/PageStatistics";
import Navigation from "./Components/Nav/Navigation";
import {useSelector} from "react-redux";

function App() {
    const isHidden = useSelector((store: any) => store.nav.isHidden);
    const [path, setPath] = useState<string>(window.location.pathname);

    const handlePath = () => {
        setTimeout(() => setPath(window.location.pathname), 1);
    }

    useEffect(() => {
        if (path == '/') window.location.replace('/TMS_todolist/')
    }, [path])

    return (
        <BrowserRouter>
            <div className='wrap'>
                <Navigation isHidden={isHidden} path={path} handlePath={handlePath} />
                <div className='main' style={{paddingLeft: (isHidden) ? '240px' : ''}}>
                    <Routes>
                        <Route path="/TMS_todolist/" exact element={<PageMain handlePath={handlePath} />} />
                        <Route path="/TMS_todolist/PageTodoList" exact element={<PageTodoList />} />
                        <Route path="/TMS_todolist/PageStatistics" exact element={<PageStatistics />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
