// export action types
export const TYPE_ADD_USER = 'ADD_USER';

/********************************************************/

// export function which returns action object
export const addUserAction = ( payload ) => {
    return {
        type: TYPE_ADD_USER,
        payload: payload
    };
};
