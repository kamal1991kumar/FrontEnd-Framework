import { routerOutlet } from 'core/hoc/routerOutlet';

// router configuration
import { routes } from './router.config';

// return `RouterOutlet` component with router configuration
export const RouterOutlet = routerOutlet( routes );

