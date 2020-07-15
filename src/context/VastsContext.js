import createDataContext from "./createDataContext";
import vastsReducer, { initialState } from "./reducers/vastsReducer";
import {
  callGetVastsApi,
  callCreateVastApi,
  callUpdateVastApi,
  callRemoveVastApi
} from "../api/vastsApi";
import {
  SET_VASTS,
  UPDATE_VAST,
  REMOVE_VAST,
  ADD_VAST,
  SET_ERROR
} from "./actionTypes/vastsActions";

const catchErrorMessage = err => {
  debugger;

  const errorMessage = err.response ? err.response.data.message : err.message;
  return errorMessage;
};

const setError = dispatch => message => {
  dispatch({ type: SET_ERROR, payload: { error: message } });
};

const addVast = dispatch => async ({ position, width, height, vastUrl }) => {
  try {
    const vast = await callCreateVastApi(position, height, width, vastUrl);
    debugger;
    dispatch({ type: ADD_VAST, payload: { vast } });
  } catch (err) {
    debugger;
    const errorMessage = catchErrorMessage(err);
    dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
  }
};

const updateVast = dispatch => async vast => {
  try {
    const patched = await callUpdateVastApi(vast);
    dispatch({ type: UPDATE_VAST, payload: { patched } });
  } catch (err) {
    const errorMessage = catchErrorMessage(err);
    dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
  }
};

const fetchVasts = dispatch => async () => {
  try {
    const vasts = await callGetVastsApi();
    dispatch({ type: SET_VASTS, payload: { vasts } });
  } catch (err) {
    const errorMessage = catchErrorMessage(err);
    dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
  }
};

const removeVast = dispatch => async id => {
  try {
    await callRemoveVastApi(id);
    dispatch({ type: REMOVE_VAST, payload: { id } });
  } catch (err) {
    const errorMessage = catchErrorMessage(err);
    dispatch({ type: SET_ERROR, payload: { error: errorMessage } });
  }
};

export const { Provider, Context } = createDataContext(
  vastsReducer,
  {
    addVast,
    updateVast,
    fetchVasts,
    removeVast,
    setError
  },
  initialState
);
