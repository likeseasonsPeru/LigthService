export const appReducer = (state, action) => {
  switch (action.type) {
    case "SAVEFORM":
      return {
        dataform: action.payload.dataform,
        show: action.payload.show,
      };
    default:
      return { ...state };
  }
};
