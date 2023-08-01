import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import userReducer from "./userSlice";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //   whitelist: [],
  //   blacklist: [],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export { rootPersistConfig, rootReducer };
