import { Lightning, Log } from '@lightningjs/sdk';
import { Rail, TopNav as TopNavigation } from './components';
import { endpoint, theme } from './configs';
import { AppTemplateSpec } from './models/template-specs';

// App component
export class App
  extends Lightning.Component<AppTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<AppTemplateSpec>
{
  index: number = -1;
  rowLength: number = endpoint.length;
  hideNav: boolean = false;

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
        color: theme.colors.primary,
        rect: true,
        Slider: {
          w: 800, h: (h: number) => h, x: 400, y: 550 + 100, mount: 0.5,
          Wrapper: {}
        }
      },
      TopNav: { type: TopNavigation, x: 0, y: 0 },

    };
  }


  override _init() {
    const rails = [];
    for (let i = 0; i < this.rowLength; i++) {
      rails.push({ type: Rail, x: 0, y: i * (600 + 50), railIndex: i })
    }
    this.tag('Background.Slider.Wrapper' as any).children = rails;
    this.index = 0;
    this._setState('Row')
    this._refocus();
  }

  repositionWrapper() {
    if (this._getState() === 'Row') {
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
  }


  override _handleUp() {
    if (this.index > 0) {
      this._setState('Row')
    }
    else {
      this._setState('TopNav')
    }
  }

  override _handleDown() {
    this._setState('Row')
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

  static override _states(): Lightning.Component.Constructor<Lightning.Component<Lightning.Component.TemplateSpecLoose, Lightning.Component.TypeConfig>>[] {
    return [
      class TopNav extends this{
        override _handleDown() {
          this._setState('Row');
        }

        override _getFocused(): any {
          return this.tag(this.state)
        }
      },
      class Row extends this{
        override _handleUp() {
          if (this.index > 0) {
            this.index -= 1;
            this.repositionWrapper();
          }
          else {
            this._setState('TopNav')
          }
        }

        override _handleDown() {
          if (this.index < this.rowLength - 1) {
            // if (this.index === 0) {
            //   this.patch({
            //     Background: {
            //       TopNav: {
            //         smooth: { h: 0 }
            //       }
            //     }
            //   });
            // }
            this.index += 1;
            this.repositionWrapper();
          }
        }

        override _getFocused(): any {
          return this.tag('Background.Slider.Wrapper' as any).children[this.index];
        }
      }
    ]
  }

}