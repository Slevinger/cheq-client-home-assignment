import {
  SET_ERROR,
  ADD_VAST,
  UPDATE_VAST,
  REMOVE_VAST,
  SET_VASTS
} from "../actionTypes/vastsActions";

export const initialState = {
  vasts: [],
  loading: false,
  error: ""
};

export default (state, { type, payload }) => {
  debugger;
  switch (type) {
    case SET_ERROR:
      const { error } = payload;
      return { ...state, error, loading: false };

    case ADD_VAST:
      const { vast } = payload;
      return {
        ...state,
        error: "",
        loading: false,
        vasts: { ...state.vasts, [vast.id]: vast }
      };

    case SET_VASTS:
      const { vasts } = payload;
      return {
        ...state,
        loading: true,
        vasts,
        error: ""
      };

    case UPDATE_VAST:
      const { patched } = payload;

      const vastChanging = state.vasts[patched.id];

      return {
        ...state,
        vasts: { ...state.vasts, [vastChanging.id]: patched },
        loading: false,
        error: ""
      };

    case REMOVE_VAST:
      const { id } = payload;
      const remainingIds = Object.keys(state.vasts).filter(
        vastId => vastId != id
      );

      return {
        ...state,
        vasts: remainingIds.reduce(
          (acc, id) => ({ ...acc, [id]: state.vasts[id] }),
          {}
        ),
        loading: false,
        error: ""
      };

    default:
      return state;
  }
};
