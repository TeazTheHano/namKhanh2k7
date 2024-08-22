//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { TreeItem } from "../data";
import { ADD_TO_FAV, REMOVE_FROM_FAV, ADD_TO_ADDED, REMOVE_FROM_ADDED, initialState, Action, State } from "./index";

export default function treeReducer(state = initialState, action: Action): State {
    switch (action.type) {
        case ADD_TO_FAV:
            if (state.fav.some((item: TreeItem) => item.id === action.payload.id)) {
                return state;
            } else {
                return {
                    ...state,
                    fav: [...state.fav, action.payload]
                };
            }
        case REMOVE_FROM_FAV:
            return {
                ...state,
                fav: state.fav.filter((item: TreeItem) => item.id !== action.payload.id)
            };
        case ADD_TO_ADDED:
            if (state.added.some((item: TreeItem) => item.id === action.payload.id)) {
                return state;
            } else {
                return {
                    ...state,
                    added: [...state.added, action.payload]
                };
            }
        case REMOVE_FROM_ADDED:
            return {
                ...state,
                added: state.added.filter((item: TreeItem) => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}