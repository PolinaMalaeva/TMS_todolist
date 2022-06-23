import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/actions/actions";

function Navigation() {
    const hidden: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

    const [styleNav, setStyleNav] = useState<string>('');
    const [path, setPath] = useState<string>(window.location.pathname);
    const isHidden = useSelector((store: any) => store.navAndTasks.isHidden);
    const dispatch = useDispatch();

    useEffect(() => {
        setStyleNav(`${hidden.current!.style}`)
    }, []);

    const clickHidden = () => {
        dispatch(actions.controlNavigation());
        if (isHidden) {
            hidden.current!.style.cssText = '{styleNav}';
        } else {
            hidden.current!.style.cssText = 'padding: 20px';
        }
    }

    const handlePath = () => {
        setTimeout(() => setPath(window.location.pathname), 1);
    }

    return (
        <div className='nav' ref={hidden}>
            <button className='hidden' onClick={() => clickHidden()}
                    style={{
                        maxWidth: (isHidden) ? 80 + 'px' : 120 + 'px',
                        fontSize: (isHidden) ? 12 + 'px' : ''
                    }}>
                {
                    (isHidden) ? 'Раскрыть' : 'Скрыть'}
            </button>

            <Link to="/" className='elem elem_main' onClick={() => handlePath()} style={{
                maxWidth: (isHidden) ? 80 + 'px' : 120 + 'px',
                maxHeight: (isHidden) ? 65 + 'px' : 120 + 'px',
                background: (path == "/") ? '#3232ca' : ''
            }}>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96px"
                     height="96px">
                    <path
                        d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/>
                </svg>
                <p className='elem_description'
                   style={{
                       display: (isHidden) ? 'none' : 'block'
                   }}>Главная
                    страница</p>
            </Link>

            <Link to="/PageTodoList" className='elem elem_todoList' onClick={() => handlePath()} style={{
                maxWidth: (isHidden) ? 80 + 'px' : 120 + 'px',
                maxHeight: (isHidden) ? 65 + 'px' : 120 + 'px',
                background: (path == "/PageTodoList") ? '#3232ca' : ''
            }}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M150 720 l0 -90 90 0 90 0 0 90 0 90 -90 0 -90 0 0 -90z"/>
                        <path d="M390 720 l0 -30 210 0 210 0 0 30 0 30 -210 0 -210 0 0 -30z"/>
                        <path d="M150 480 l0 -90 90 0 90 0 0 90 0 90 -90 0 -90 0 0 -90z"/>
                        <path d="M390 480 l0 -30 210 0 210 0 0 30 0 30 -210 0 -210 0 0 -30z"/>
                        <path d="M150 240 l0 -90 90 0 90 0 0 90 0 90 -90 0 -90 0 0 -90z"/>
                        <path d="M390 240 l0 -30 210 0 210 0 0 30 0 30 -210 0 -210 0 0 -30z"/>
                    </g>
                </svg>
                <p className='elem_description'
                   style={{
                       display: (isHidden) ? 'none' : 'block'
                   }}>Составить список задач</p>
            </Link>

            <Link to="/PageStatistics" className='elem elem_statistics' onClick={() => handlePath()} style={{
                maxWidth: (isHidden) ? 80 + 'px' : 120 + 'px',
                maxHeight: (isHidden) ? 65 + 'px' : 120 + 'px',
                background: (path == "/PageStatistics") ? '#3232ca' : ''
            }}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M410 175 l0 -175 40 0 40 0 0 175 0 175 -40 0 -40 0 0 -175z"/>
                        <path d="M210 130 l0 -130 40 0 40 0 0 130 0 130 -40 0 -40 0 0 -130z"/>
                        <path d="M310 105 l0 -105 40 0 40 0 0 105 0 105 -40 0 -40 0 0 -105z"/>
                        <path d="M110 105 l0 -105 40 0 40 0 0 90 0 105 -40 0 -40 0 0 -105z"/>
                        <path d="M10 105 l0 -105 40 0 40 0 0 10 0 105 -40 0 -40 0 0 -105z"/>
                    </g>
                </svg>
                <p className='elem_description'
                   style={{
                       display: (isHidden) ? 'none' : 'block'
                   }}>Статистика
                    по задачам</p>
            </Link>
        </div>
    )
}

export default Navigation;