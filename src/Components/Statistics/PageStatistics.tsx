import React from "react";
import arrow from '../../img/arrow.png';
import arrow2 from '../../img/arrow2.png';
import arrow3 from '../../img/arrow3.png';
import arrow4 from '../../img/arrow4.png';
import {useSelector} from "react-redux";
import StatisticsElem from "./StatisticsElem";

function PageStatistics() {

    const numberTasks: number = useSelector((store: any) => store.tasks.numberTasks);
    const numberDeleteTasks: number = useSelector((store: any) => store.tasks.numberDeleteTasks);
    const numberEditTasks: number = useSelector((store: any) => store.tasks.numberEditTasks);
    const timeFirstTask: string = useSelector((store: any) => store.tasks.timeFirstTask);
    const timeLastTask: string = useSelector((store: any) => store.tasks.timeLastTask);

    return (
        <div className="wrap_statistics">
            <h1 className="title">Статистика по задачам</h1>
            <div className="statistics_list">
                <StatisticsElem className="number_added" textItem="Количество добавленных задач за все время:"
                                src={arrow} value={numberTasks}/>
                <StatisticsElem className="number_deleted" textItem="Количество удаленных задач за все время:"
                                src={arrow3} value={numberDeleteTasks}/>
                <StatisticsElem className="number_edited" textItem="Количество отредактированных задач за все время:"
                                src={arrow4} value={numberEditTasks}/>
                <StatisticsElem className="time_adding_first" textItem="Время добавления первой задачи:"
                                src={arrow2} value={timeFirstTask}/>
                <StatisticsElem className="time_adding_last" textItem="Время добавления последней задачи:"
                                src={arrow} value={timeLastTask}/>
            </div>
        </div>
    )
}

export default PageStatistics;