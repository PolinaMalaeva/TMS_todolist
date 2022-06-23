import {combineReducers} from "redux";
import navAndTasks from "./navAndTasks";
import list from "./list";
import {IList} from "../../interfaces/interfaces";

export default combineReducers({
    navAndTasks: <(state: {
                       isHidden: boolean;
                       numberTasks: number;
                       numberDeleteTasks: number;
                       numberEditTasks: number | undefined;
                       timeFirstTask: string;
                       timeLastTask: string;
                   } | undefined,
                   action: {
                       type: string;
                       payload: any
                   }) => any>navAndTasks,
    list: <(state: { list: IList[] } | undefined,
            action: {
                type: string,
                payload: any
            }) => any>list,
})
