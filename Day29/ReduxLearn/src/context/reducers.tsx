export default function (state: any, action: any) {
  switch (action.type) {
    case 'ADD_LIST':
      const {name} = action.payload;
      const newList = [...state.nameList, name];
      return {...state, nameList: newList};
    case 'CLEAN_LIST':
      return {...state,nameList:[]}
      case 'SET_USERNAME':
        return {...state,userName:action.payload.userName}
    default:
      return state;
  }
} 
