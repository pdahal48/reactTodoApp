const DEFAULT_STATE = {
    tasks: []
}

const rootReducer = (state=DEFAULT_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                tasks: [
                    ...state.tasks, {...action.task}
                ]
            };

        case "DELETE_TODO":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id)
            };
      default:
            return state;
    }
}

export default rootReducer;