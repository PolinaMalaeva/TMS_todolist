import * as constants from "../constants/constants";

const stateApp = {
    isHidden: <boolean>false,
    numberTasks: <number>+localStorage.getItem('numberTasks')! || 0,
    numberDeleteTasks: <number>+localStorage.getItem('numberDeleteTasks')! || 0,
    numberEditTasks: <number>+localStorage.getItem('numberEditTasks')! || 0,
    timeFirstTask: <string>localStorage.getItem('timeFirstTask')! || 'Задачи не добавлены',
    timeLastTask: <string>localStorage.getItem('timeLastTask')! || 'Задачи не добавлены'
}

let repeat: number[] = JSON.parse(localStorage.getItem('repeatEditTasks')!) || [];
let numberLastTask = 0;

export default function navAndTasks(
    state: {
        isHidden: boolean;
        numberTasks: number;
        numberDeleteTasks: number;
        numberEditTasks: number | undefined;
        timeFirstTask: string;
        timeLastTask: string
    } = stateApp,
    action: {
        type: string;
        payload: any
    }) {
    const {type, payload} = action;

    switch (type) {
        case constants.CONTROL_NAVIGATION:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        case constants.ADD_NUMBER_TASKS:
            return {
                ...state,
                numberTasks: (() => {
                    let num = state.numberTasks + 1;
                    localStorage.setItem('numberTasks', String(num));
                    return +localStorage.getItem('numberTasks')!;
                })()
            }
        case constants.ADD_NUMBER_DELETE_TASKS:
            return {
                ...state,
                numberDeleteTasks: (() => {
                    let num = state.numberDeleteTasks + 1;
                    localStorage.setItem('numberDeleteTasks', String(num));
                    return +localStorage.getItem('numberDeleteTasks')!;
                })()
            }
        case constants.ADD_NUMBER_EDIT_TASKS:
            return {
                ...state,
                numberEditTasks: (() => {
                    let isRepeat = repeat.find(idTask => idTask == payload.id);
                    if (!isRepeat) {
                        let num = state.numberEditTasks! + 1;
                        localStorage.setItem('numberEditTasks', String(num));
                        repeat.push(payload.id);
                        localStorage.setItem('repeatEditTasks', JSON.stringify(repeat));
                        return +localStorage.getItem('numberEditTasks')!;
                    } else {
                        return state.numberEditTasks
                    }
                })()
            }
        case constants.TIME_FIRST_TASK:
            return {
                ...state,
                timeFirstTask: (() => {
                    if (payload.list[0] && (state.timeFirstTask == 'Задачи не добавлены')) {
                        localStorage.setItem('timeFirstTask', payload.list[0].time);
                        return localStorage.getItem('timeFirstTask')!;
                    } else {
                        return state.timeFirstTask
                    }
                })()
            }
        case constants.TIME_LAST_TASK:
            return {
                ...state,
                timeLastTask: (() => {
                    if (numberLastTask > payload.list.length) {
                        numberLastTask = payload.list.length;
                        return state.timeLastTask;
                    } else if (payload.list[payload.list.length - 1]) {
                        numberLastTask = payload.list.length;
                        localStorage.setItem('timeLastTask', payload.list[payload.list.length - 1].time);
                        return localStorage.getItem('timeLastTask')!;
                    } else {
                        return state.timeLastTask
                    }
                })()
            }
        default:
            return state;
    }
}
