import { routerOutlet } from 'core/hoc/routerOutlet';

// router configuration
import { routes } from './router.config';

// return `RouterOutlet` component
export const RouterOutlet = routerOutlet( routes );

