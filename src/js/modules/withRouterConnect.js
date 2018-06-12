/**
 * withRedux( Component, mapStateToProps, mapDispatchToProps) returns a component
 * with Route props and redux connect functionality.
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// export function which wraps component with `withRouter` and `connect`
export const withRouterConnect = ( Component, mapStateToProps = {}, mapDispatchToProps = {} ) => {
    return withRouter(
        connect( mapStateToProps, mapDispatchToProps )( Component )
    );
};
