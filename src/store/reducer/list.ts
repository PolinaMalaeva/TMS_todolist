import * as constants from "../constants/constants";
import {IList} from "../../interfaces/interfaces";

const stateApp = {
    list: <IList[]>JSON.parse(localStorage.getItem('list')!) || []
}

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября',
    'ноября', 'декабря'];

const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

const getDate = () => {
    let date = new Date;

    const addNull = (getFunc: number) => {
        return (getFunc < 10) ? '0' + getFunc : getFunc
    }

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dayOfTheWeek = days[date.getDay()];
    let hours = addNull(date.getHours());
    let minutes = addNull(date.getMinutes());
    let seconds = addNull(date.getSeconds());

    return `${day} ${month} ${year} ${dayOfTheWeek} ${hours}:${minutes}:${seconds}`
}

export default function list(state = stateApp, action: { type: string; payload: any; }) {
    const {type, payload} = action;

    switch (type) {
        case constants.CREATE_LIST:
            return {
                list: [...state.list, {
                    id: Math.random(),
                    value: {
                        title: {
                            title: payload.title,
                            display: false
                        },
                        description: {
                            description: payload.description,
                            display: false
                        }
                    },
                    time: getDate()
                }]
            }
        case constants.UPDATE_LIST:
            return {
                list: payload,
            }
        default:
            return state;
    }
}
