export const onChange = (payload) => {
    // console.log('payload', payload)
    return {
        type: 'CHANGE',
        payload: payload
    }
}

export const addTodo = () => {
    return {
        type: 'ADD_TODO',
    }
}

export const SearchChange = (payload) => {
    // console.log('payload', payload)
    return {
        type: 'SEARCHCHANGE',
        payload: payload
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const editTodo = (ele) => {
    return {
        type: 'EDIT_TODO',
        payload: ele
    }
}

export const addEditValue = (payload) => {
    // console.log('payload', payload)
    return {
        type: 'EDITVALUE',
        payload: payload
    }
}

export const removeTodo = () => {
    return {
        type: 'REMOVE_TODO'
    }
}

