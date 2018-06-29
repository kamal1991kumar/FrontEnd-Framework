// export action types
export const TYPE_SAVE_HOSTS = 'SAVE_HOSTS';

/********************************************************/

// save hosts action
export const saveHostsAction = ( payload ) => {
    return {
        type: TYPE_SAVE_HOSTS,
        payload: payload
    };
};
