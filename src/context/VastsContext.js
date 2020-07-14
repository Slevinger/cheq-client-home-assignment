import createDataContext from "./createDataContext";
import vastsReducer, { initialState } from "./reducers/vastsReducer";
import axios, {
  getVastsApiCall,
  createVastApiCall,
  updateVastApiCall,
  removeVastApiCall
} from "../api/vastsApi";
import {
  ADD_VAST,
  SET_VASTS,
  UPDATE_VAST,
  SET_ERROR,
  REMOVE_VAST
} from "./actionTypes/vastsActions";

const addVast = dispatch => async ({ position, width, height, vastUrl }) => {
  try {
    const { data: vast } = await createVastApiCall(
      position,
      height,
      width,
      vastUrl
    );
    debugger;
    dispatch({ type: ADD_VAST, payload: { vast } });
  } catch (err) {
    const errorMessage = err.response ? err.response.data : err.message;
    console.error(errorMessage);
    dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
  }
};

const updateVast = dispatch => async ({
  vastId,
  position,
  width,
  height,
  vastUrl
}) => {
  try {
    const { data } = await updateVastApiCall({
      vastId,
      position,
      height,
      width,
      vastUrl
    });
    dispatch({ type: UPDATE_VAST, payload: { patched: data } });
  } catch (err) {
    const errorMessage = err.response ? err.response.data : err.message;
    console.error(errorMessage);
    dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
  }
};

const fetchVasts = dispatch => async () => {
  try {
    const vasts = await getVastsApiCall();
    dispatch({ type: SET_VASTS, payload: { vasts } });
  } catch (err) {
    const errorMessage = err.response ? err.response.data : err.message;
    console.error(errorMessage);
    dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
  }
};

const removeVast = dispatch => async id => {
  try {
    const res = await removeVastApiCall(id);
    dispatch({ type: REMOVE_VAST, payload: { id } });
  } catch (err) {
    const errorMessage = err.response ? err.response.data : err.message;
    console.error(errorMessage);
    dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
  }
};

export const { Provider, Context } = createDataContext(
  vastsReducer,
  {
    addVast,
    updateVast,
    fetchVasts,
    removeVast
  },
  initialState
);
