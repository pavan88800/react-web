export const searchAction = value => async dispatch => {
  dispatch({
    type: 'FILTER_DATA',
    payload: value
  })
}

export const fetchData = value => async dispatch => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          dispatch({
            type: 'DISPLAY_DATA',
            payload: value
          })
        ),
      500
    )
  )
}
