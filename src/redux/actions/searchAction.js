export const searchAction = value => async (dispatch, getState) => {
  dispatch({
    type: 'SEARCH',
    payload: value
  })
}
