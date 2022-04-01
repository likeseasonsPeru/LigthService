export const appReducer = (state, action) => {
  switch (action.type) {
    case "SAVEFORM":
      return {
        dataform: action.payload.dataform,
        show: action.payload.show,
        nroApartaments: action.payload.nroApart,
      };
    default:
      return { ...state };
  }
};
