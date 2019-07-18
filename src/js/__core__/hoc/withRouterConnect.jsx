/**
 * withStore( Component, mapStateToProps, mapDispatchToProps ) returns a component
 * with Route props and redux connect functionality.
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * @type {function}
 * @desc This HOC returns a React component wrapped with `Route` component from React Router to provide necessary route information as props to the component. It uses React Redux's connect function to provide state and props to the component.
 * @param {object} Component - A React component
 * @param {object} [mapStateToProps={}] - React-Redux map state to props
 * @param {object} [mapDispatchToProps={}] - React-Redux map dispatch to props
 * @returns {object} A React component
 * @example
 * import { withRouterConnect } from 'core/hoc/withRouterConnect';
 * import { TestView } from 'views/Test.view';
 *
 * const mapStateToProps = {};
 * const mapDispatchToProps = {};
 * const ComponentWithRouterConnect = withRouterConnect( TestView, mapStateToProps, mapDispatchToProps );
 */
export const withRouterConnect = ( Component, mapStateToProps = {}, mapDispatchToProps = {} ) => {
    return withRouter(
        connect( mapStateToProps, mapDispatchToProps )( Component )
    );
};
