// export action types
export const TYPE_ADD_EMBEDDED_JSON = 'ADD_EMBEDDED_JSON';

/********************************************************/

// export function which returns action object
export const saveEmbeddedJsonAction = ( payload ) => {
    return {
        type: TYPE_ADD_EMBEDDED_JSON,
        payload: payload
    };
};
