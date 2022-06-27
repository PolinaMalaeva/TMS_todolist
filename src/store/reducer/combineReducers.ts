import {combineReducers} from "redux";
import tasks from "./tasks";
import list from "./list";
import {IList} from "../../interfaces/interfaces";
import nav from "./nav";

export default combineReducers({
    nav: <(state: { isHidden: boolean }, action: { type: string }) => any>nav,
    tasks: <(
        state: {
            numberTasks: number; numberDeleteTasks: number; numberEditTasks: number | undefined;
            timeFirstTask: string; timeLastTask: string
        },
        action: { type: string; payload: any }) => any>tasks,
    list: <(state: { list: IList[] }, action: { type: string, payload: any }) => any>list,
})
