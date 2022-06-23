import React from "react";
import arrow from '../../img/arrow.png';
import arrow2 from '../../img/arrow2.png';
import arrow3 from '../../img/arrow3.png';
import arrow4 from '../../img/arrow4.png';
import {useSelector} from "react-redux";

function PageStatistics() {

    const numberTasks:number = useSelector((store: any) => store.navAndTasks.numberTasks);
    const numberDeleteTasks:number = useSelector((store: any) => store.navAndTasks.numberDeleteTasks);
    const numberEditTasks:number = useSelector((store: any) => store.navAndTasks.numberEditTasks);
    const timeFirstTask:string = useSelector((store: any) => store.navAndTasks.timeFirstTask);
    const timeLastTask:string = useSelector((store: any) => store.navAndTasks.timeLastTask);

    return (
        <div className="wrap_statistics">
            <h1 className="title">Статистика по задачам</h1>
            <div className="statistics_list">
                <div className="number_added">
                    <div className="item">Количество добавленных задач за все время:</div>
                    <img src={arrow} alt=""/>
                    <div className="value">{numberTasks}</div>
                </div>
                <div className="number_deleted">
                    <div className="item">Количество удаленных задач за все время:</div>
                    <img src={arrow3} alt=""/>
                    <div className="value">{numberDeleteTasks}</div>
                </div>
                <div className="number_edited">
                    <div className="item">Количество отредактированных задач за все время:</div>
                    <img src={arrow4} alt=""/>
                    <div className="value">{numberEditTasks}</div>
                </div>
                <div className="time_adding_first">
                    <div className="item">Время добавления первой задачи:</div>
                    <img src={arrow2} alt=""/>
                    <div className="value">{timeFirstTask}</div>
                </div>
                <div className="time_adding_last">
                    <div className="item">Время добавления последней задачи:</div>
                    <img src={arrow} alt=""/>
                    <div className="value">{timeLastTask}</div>
                </div>
            </div>
        </div>
    )
}

export default PageStatistics;