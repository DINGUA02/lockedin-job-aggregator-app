

export const initialState = {
    jobs: [],
    favorites: [],
    filteredJobs: [],
};

export const jobReducer = (state, action) => {
    switch (action.type) {

        case 'SET_JOBS':
            return {...state, jobs: action.payload, filteredJobs: action.payload};
            
        case 'ADD_TO_FAVORITES':
            return {...state, favorites: [...state.favorites, action.payload]};

        case 'REMOVE_FROM_FAVORITES':
            return {...state, favorites: state.favorites.filter(favorite=> favorite.id !== action.payload)};

        case 'SET_FILTERED':
            return {...state, filteredJobs: action.payload};

        default:
            return state;

    }
};
