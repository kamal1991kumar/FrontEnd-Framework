/* eslint-disable no-plusplus */
import React from 'react';
import { addUserAction } from 'store/actions/user.action';
import { withRouterConnect } from 'modules/withRouterConnect';

export class _AboutPortal extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        let index = 0;
        const intv = setInterval( () => {
            this.props.addUser( {
                name: `User Name (${ ++index })`,
                email: `user_${ index }@gmail.com`
            } );

            if( 5 === index ) {
                clearInterval( intv );
            }
        }, 2000 );
    }

    render() {
        return (
            <div className='block'>
                <h1 className='block__title'>Avizva Portal Solutions</h1>

                <ul>
                { this.props.users.map( user => {
                    return (
                        <li key={ user.name }>
                            <b>{ user.name }</b>
                            (<i>{ user.email }</i>)
                        </li>
                    );
                } ) }
                </ul>

                <p className='block__content'>Our portal solutions combine content, collaboration and self service with defined workflows that allows business to build seamless user experience. We have executed Business Application and Web Content driven projects on IBM WebSphere Portal and Liferay Platforms.</p>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        addUser: ( user ) => {
            dispatch( addUserAction( user ) );
        }
    };
};

// export `AboutPortal` class with redux store and router
// `withRouterConnect` is necessary for component to work with react router and redux
export const AboutPortal = withRouterConnect( _AboutPortal, mapStateToProps, mapDispatchToProps );
