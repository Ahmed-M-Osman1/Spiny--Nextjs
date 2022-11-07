import { Dispatch } from 'redux';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_SELECTED_CHARACTER = 'SET_SELECTED_CHARACTER';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setSearchResults =
  (results: Array<object>) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SEARCH_RESULTS, //action type
      payload: results, //action value
    });
  };

export const setSelectedCharacter =
  (character: object | boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SELECTED_CHARACTER, //action type
      payload: character, //action value
    });
  };

export const setSelectedMovie =
  (movie: object) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SELECTED_MOVIE, //action type
      payload: movie, //action value
    });
  };

export const setIsLoading =
  (loading: boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_IS_LOADING, //action type
      payload: loading, //action value
    });
  };
