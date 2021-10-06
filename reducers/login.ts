enum ActionType {
    LOADING,
    FAILURE,
  }
  
  export const actionCreators = {
    loading: () => ({ type: ActionType.LOADING }),
    failure: () => ({ type: ActionType.FAILURE }),
  }

  interface IState {
      loading: boolean,
      error: boolean,
  }
  interface IAction {
      type: ActionType
  }

  export const initialState = {
  loading: false,
  error: false,
}

export function reducer(state: IState, action : IAction) {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, loading: true, error: false }
    case ActionType.FAILURE:
      return { ...state, loading: false, error: true }
  }
}