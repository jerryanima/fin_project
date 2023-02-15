import  ConfigList  from '../config.json'

export const reducer = (state = ConfigList, action) => {
    switch (action.type) {
      case "GET_CONFIG": 
        return {...state, ConfigList}
      default: return state
    }
  
  }  