enum ActionType {
    LOADING,
    FAILURE,
    FORM_ERROR,
  }
  
  export const actionCreators = {
    loading: () => ({ type: ActionType.LOADING }),
    failure: () => ({ type: ActionType.FAILURE }),
    formError: (msg: String) => ({
        type: ActionType.FORM_ERROR,
        message: msg
    })
  }

  interface IState {
      loading: boolean,
      error: boolean,
      errorMsg?: String,
  }
  interface IAction {
      type: ActionType
      message?: String
  }

  export const initialState = {
  loading: false,
  error: false,
  errorMsg: ''
}

export function reducer(state: IState, action : IAction) {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, loading: true, error: false }
    case ActionType.FAILURE:
      return { ...state, loading: false, error: true }
    case ActionType.FORM_ERROR:
        return { ...state, loading: false, error: true, errorMsg: action.message}
  }
}