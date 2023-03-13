import { Lightning, } from '@lightningjs/sdk';
import { endpoint } from './configs';
import { AppTemplateSpec } from './models/template-specs';
import { Home } from './pages';

// App component
export class App
  extends Lightning.Component<AppTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<AppTemplateSpec>
{
  index: number = 0;

  /**
   * This function is responsible for the creation and return of the UI template. This function takes  no parameters
   * and returns the template.
   * 
   * @returns Template for the Application
   * 
   */
  static override _template(): Lightning.Component.Template<AppTemplateSpec> {
    return {
      Home: {
        type: Home
      }
    };
  }

  /**
     * This function will override the default behavior of the getFocused() method
     * 
     * @returns Return the child Component that this Component wishes to receive focus. Returning null 
     * or undefined tells the focus engine to not set focus on this Component at all.By default,
     * this Component's own instance is returned.
     */

  override _getFocused(): any {
    return this.tag('Home' as any);
  }
}