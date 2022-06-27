import * as constants from "../constants/constants";

const stateApp = {
    isHidden:<boolean> false
}

export default function nav(state = stateApp, action: { type: string }): any {
    const {type} = action;

    switch (type) {
        case constants.CONTROL_NAVIGATION:
            return {
                isHidden: !state.isHidden
            }
        default:
            return state
    }
}