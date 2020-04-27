import { combineReducers } from "redux";
import music from "./music";
import auth from "./auth";

export default combineReducers({ music, auth });
