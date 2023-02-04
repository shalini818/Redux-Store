const initialState = {
  balance: 100000,
  name: 'Shalini',
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { ...state, balance: state.balance + action.payload };
    case 'WITHDRAW':
      return { ...state, balance: state.balance - action.payload };
    default:
      return state;
  }
};
