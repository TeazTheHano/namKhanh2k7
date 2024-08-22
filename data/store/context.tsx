import { createContext } from "react";
import { State, Action, initialState } from "./index";

const RootContext = createContext<[State, React.Dispatch<Action>]>([initialState, () => null]);

export default RootContext;