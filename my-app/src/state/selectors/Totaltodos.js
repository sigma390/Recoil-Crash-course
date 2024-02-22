import { selector } from "recoil";
import { todoState } from "../atoms/TodoSate";


export const totalTodos = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(todoState);
  
      return text.length;
    },
  });