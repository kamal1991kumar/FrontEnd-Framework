import ReactDOM from 'react-dom';

import { App } from 'components/container/App.component';
import { withRouter } from 'modules/withRouter';

// render initial component
ReactDOM.render( withRouter( App ), document.getElementById( 'app-root' ) );
