import { Lightning, Router, Utils } from '@lightningjs/sdk';
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

  static getFonts() {
    return [
      {
        family: "Saira Regular",
        url: Utils.proxyUrl("fonts/Saira-VariableFont_wdth,wght.ttf"),
        descriptors: { weight: "1 1000" },
      },
      {
        family: "Saira Italics",
        url: Utils.proxyUrl("fonts/Saira-Italic-VariableFont_wdth,wght.ttf"),
        descriptors: { weight: "1 1000" },
      },
    ];
  }
}
