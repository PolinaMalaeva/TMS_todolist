import * as constants from "../constants/constants";
import {IList} from "../../interfaces/interfaces";

const stateApp = {
    list: <IList[]>JSON.parse(localStorage.getItem('list')!) || []
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
                    time: String(new Date())
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
