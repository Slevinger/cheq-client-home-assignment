import createDataContext from "./createDataContext";
import vastsReducer, { initialState } from "./reducers/vastsReducer";
import axios, {
  callGetVastsApi,
  callCreateVastApi,
  callUpdateVastApi,
  callRemoveVastApi
} from "../api/vastsApi";
import {
  ADD_VAST,
  SET_VASTS,
  UPDATE_VAST,
  SET_ERROR,
  REMOVE_VAST
} from "./actionTypes/vastsActions";

const catchError = (err, dispatch) => {
  const errorMessage = err.response ? err.response.data : err.message;
  console.error(errorMessage);
  dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
};

const addVast = dispatch => async ({ position, width, height, vastUrl }) => {
  try {
    const vast = await callCreateVastApi(position, height, width, vastUrl);

    dispatch({ type: ADD_VAST, payload: { vast } });
  } catch (err) {
    catchError(err, dispatch);
  }
};

const updateVast = dispatch => async vast => {
  try {
    const patched = await callUpdateVastApi(vast);
    dispatch({ type: UPDATE_VAST, payload: { patched } });
  } catch (err) {
    catchError(err, dispatch);
  }
};

const fetchVasts = dispatch => async () => {
  try {
    const vasts = await callGetVastsApi();
    dispatch({ type: SET_VASTS, payload: { vasts } });
  } catch (err) {
    catchError(err, dispatch);
  }
};

const removeVast = dispatch => async id => {
  try {
    await callRemoveVastApi(id);
    dispatch({ type: REMOVE_VAST, payload: { id } });
  } catch (err) {
    catchError(err, dispatch);
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
