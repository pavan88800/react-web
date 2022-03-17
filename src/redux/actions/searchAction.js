export const searchAction = value => async (dispatch, getState) => {
  dispatch({
    type: 'SEARCH',
    payload: value
  })
}

export const FetchData = value => async (dispatch, getState) => {
  dispatch({
    type: 'DISPLAY_DATA',
    payload: value
  })
}
