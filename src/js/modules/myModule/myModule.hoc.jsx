import React from 'react';

// import default view
import { myModule as myModuleView } from './myModule.view';

/**
 * @type {function}
 * @desc A Higher-Order-Component to enhance functionality of `Component`
 * @param {object} Component - A React component
 * @example
 * import { myModule } from 'js/modules/myModule';
 *
 * // create a component
 * const ComponentWithHOC = myModule( CustomView );
 * @return {class} - A standard React component
 */
const myModule = ( Component = myModuleView ) => {
    return class MyModule extends React.Component {
        constructor( props ) {
            super( props );
        }

        render() {
            return (
                <Component />
            );
        }
    };
};

// export HOC
export { myModule };

// export react component with default view
export const MyModule = myModule();

// set display name
myModule.displayName = 'myModule';

// set default props
myModule.defaultProps = {};
