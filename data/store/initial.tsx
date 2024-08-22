//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { TreeItem } from "../data";

export interface State {
    fav: TreeItem[];
    added: TreeItem[];
}

export interface Action {
    type: string;
    payload: TreeItem;
}

export const initialState: State = {
    fav: [],
    added: []
};