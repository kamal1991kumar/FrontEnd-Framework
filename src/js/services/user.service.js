import { Observable } from 'rxjs';

// use `Http` module for making network requests
// all environment related configuration is implemented by this module
import { Http } from 'modules/Http';


/*************************************************************/


/////////// GET /////////////

// get all users
const getAllUsers = () => {
    return Observable.create( observer => {
        Http.get( observer, {
            path: '/users'
        } );
    } );
};

/////////// POST /////////////

// add new user
const addUser = ( data ) => {
    return Observable.create( observer => {
        Http.post( observer, {
            path: '/users/',
            data: Object.assign( data, { id: '2' } ) // generate random `id` field
        } );
    } );
};


/////////// DELETE /////////////

// delete user with id
const deleteUser = ( id ) => {
    return Observable.create( observer => {
        Http.Put( observer, {
            path: `/users/${ id }`
        } );
    } );
};


/*************************************************************/


// import { UserService } from 'UserService'
export const UserService = { getAllUsers, addUser, deleteUser };
