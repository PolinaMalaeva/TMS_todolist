import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import * as actions from "../../store/actions/actions";
import home from '../../img/home.svg';
import tasks from '../../img/tasks.svg';
import statistic from '../../img/statistic.svg';
import LinkElem from "./LinkElem";

function Navigation(props: { isHidden: boolean, path: string, handlePath: () => void }) {
    const hidden: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

    const [styleNav, setStyleNav] = useState<string>('');
    const dispatch = useDispatch();

    useEffect(() => {
        setStyleNav(`${hidden.current!.style}`)
    }, []);

    const clickHidden = () => {
        dispatch(actions.controlNavigation());
        if (props.isHidden) {
            hidden.current!.style.cssText = `${styleNav}`;
        } else {
            hidden.current!.style.cssText = 'padding: 20px';
        }
    }

    return (
        <div className='nav' ref={hidden}>
            <button className='hidden' onClick={() => clickHidden()}
                    style={{
                        maxWidth: (props.isHidden) ? 80 + 'px' : 120 + 'px',
                        fontSize: (props.isHidden) ? 12 + 'px' : ''
                    }}>
                {(props.isHidden) ? 'Раскрыть' : 'Скрыть'}
            </button>

            <LinkElem isHidden={props.isHidden} path={props.path} to="/TMS_todolist/" handlePath={props.handlePath} src={home}
                      textElemDescription="Главная страница"/>
            <LinkElem isHidden={props.isHidden} path={props.path} to="/TMS_todolist/PageTodoList" handlePath={props.handlePath}
                      src={tasks} textElemDescription="Составить список задач"/>
            <LinkElem isHidden={props.isHidden} path={props.path} to="/TMS_todolist/PageStatistics" handlePath={props.handlePath}
                      src={statistic} textElemDescription="Статистика по задачам"/>
        </div>
    )
}

export default Navigation;