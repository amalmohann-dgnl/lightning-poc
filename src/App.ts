import { Lightning, Router, } from '@lightningjs/sdk';
import { routes } from './configs';
import { AppTemplateSpec } from './models/template-specs';

// App component
export class App
  extends Router.App
  implements Lightning.Component.ImplementTemplateSpec<AppTemplateSpec>
{
  // setting up the router for the application
  override _setup() {
    Router.startRouter(routes, this);
  }

}