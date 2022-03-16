export const handleRange = rangeValue => async (dispatch, getState) => {
  dispatch({
    type: 'RANGE_VALUE_UPDATE',
    payload: rangeValue
  })
}
