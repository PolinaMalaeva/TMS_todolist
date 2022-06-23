import * as constants from "../constants/constants";

export const controlNavigation = () => ({
    type: constants.CONTROL_NAVIGATION
});

export const addNumberTasks = () => ({
    type: constants.ADD_NUMBER_TASKS,
});

export const addNumberDeleteTasks = () => ({
    type: constants.ADD_NUMBER_DELETE_TASKS,
});

export const addNumberEditTasks = (payload: any) => ({
    type: constants.ADD_NUMBER_EDIT_TASKS,
    payload,
});

export const timeFirstTasks = (payload: object) => ({
    type: constants.TIME_FIRST_TASK,
    payload,
});

export const timeLastTasks = (payload: object) => ({
    type: constants.TIME_LAST_TASK,
    payload,
});

export const createList = (payload: object) => ({
    type: constants.CREATE_LIST,
    payload,
});

export const updateList = (payload: object) => ({
    type: constants.UPDATE_LIST,
    payload,
});
