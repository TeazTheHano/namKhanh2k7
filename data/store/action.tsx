//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { TreeItem } from "../data";

export const ADD_TO_FAV = 'ADD_TO_FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const ADD_TO_ADDED = 'ADD_TO_ADDED';
export const REMOVE_FROM_ADDED = 'REMOVE_FROM_ADDED';

export const addFav = (item: TreeItem) => {
    return {
        type: ADD_TO_FAV,
        payload: item
    }
}

export const removeFav = (item: TreeItem) => {
    return {
        type: REMOVE_FROM_FAV,
        payload: item
    }
}

export const addAdded = (item: TreeItem) => {
    return {
        type: ADD_TO_ADDED,
        payload: item
    }
}

export const removeAdded = (item: TreeItem) => {
    return {
        type: REMOVE_FROM_ADDED,
        payload: item
    }
}