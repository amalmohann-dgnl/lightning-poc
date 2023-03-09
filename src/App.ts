import { Lightning, Log, Utils } from '@lightningjs/sdk';
import { Rail } from './components';
import { endpoint, theme } from './configs';
import { AppTemplateSpec } from './models/template-specs';

// App component
export class App
  extends Lightning.Component<AppTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<AppTemplateSpec>
{
  index: number = 0;
  rowLength: number = endpoint.length;

  readonly Wrapper = this.getByRef('Background.Slider.Wrapper' as any)!

  /**
   * This function is responsible for the creation and return of the UI template. This function takes  no parameters
   * and returns the template.
   * 
   * @returns Template for the Application
   * 
   */
  static override _template(): Lightning.Component.Template<AppTemplateSpec> {
    return {
      Background: {
        w: 1920, h: 1080,
        color: theme.colors.background,
        rect: true,
        Slider: {
          w: 800, h: (h: number) => h, x: 400, y: 550, mount: 0.5,
          Wrapper: {}
        }

      }
    };
  }


  override _init() {
    const rails = [];
    for (let i = 0; i < this.rowLength; i++) {
      rails.push({ type: Rail, x: 0, y: i * (500 + 50), endPoint: endpoint[i] })
    }
    this.tag('Background.Slider.Wrapper' as any).children = rails;
  }

  repositionWrapper() {
    const wrapper = this.tag('Background.Slider.Wrapper' as any);
    const sliderH = this.tag('Background.Slider' as any).h;
    const currentWrapperY = wrapper.transition('y').targetvalue || wrapper.y;
    const currentFocus = wrapper.children[this.index];
    const currentFocusY = currentFocus.y + currentWrapperY;
    const currentFocusOuterHeight = currentFocus.y + currentFocus.h;
    if (currentFocusY < 0) {
      wrapper.setSmooth('y', -currentFocus.y);
    }
    else if (currentFocusOuterHeight > sliderH) {
      wrapper.setSmooth('y', sliderH - (currentFocusOuterHeight));
    }
  }



  override _handleUp() {
    if (this.index > 0) {
      this.index -= 1;
      this.repositionWrapper();
    }

  }

  override _handleDown() {
    if (this.index < this.rowLength - 1) {
      this.index += 1;
      this.repositionWrapper();
    }
  }

  /**
     * This function will override the default behavior of the getFocused() method
     * 
     * @returns Return the child Component that this Component wishes to receive focus. Returning null 
     * or undefined tells the focus engine to not set focus on this Component at all.By default,
     * this Component's own instance is returned.
     */

  override _getFocused(): any {
    return this.tag('Background.Slider.Wrapper' as any).children[this.index];
  }

}