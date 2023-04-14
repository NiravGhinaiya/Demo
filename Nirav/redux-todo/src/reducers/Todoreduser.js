const initialData = {
    list: [],
    inpData: '',
    toggle: false,
    id: '',
    searchData: ''
}

const Todoreduser = (state = initialData, action) => {
    switch (action.type) {
        case 'CHANGE': {
            // console.log('action.payload', action, state)
            let input = action.payload;
            return {
                ...state,
                inpData: input
            }
        }

        case 'ADD_TODO': {
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: new Date().getTime().toString(),
                        data: state.inpData
                    }
                ],
                inpData: ''
            }
        }

        case 'SEARCHCHANGE': {
            let search = action.payload;
            console.log('action.payload', search)
            return {
                ...state,
                searchData: search
            }
        }

        case 'DELETE_TODO': {
            const newList = state.list.filter((ele) => ele.id !== action.id)
            return {
                ...state,
                list: newList
            }
        }

        case 'EDIT_TODO': {
            const { id, data } = action.payload;
            let editData = data
            return {
                ...state,
                toggle: true,
                id: id,
                inpData: editData
            }
        }

        case 'EDITVALUE': {
            let eVal = state.list.filter((d) => d.id === action.payload ? d.data = state.inpData : d)
            return {
                ...state,
                eVal,
                toggle: false,
                inpData: ''
            }
        }

        case 'REMOVE_TODO': {
            return { ...state, list: [] }
        }

        default: return state;
    }
}

export default Todoreduser;