import { Lightning } from '@lightningjs/sdk';
import { theme } from '../../../configs';
import BaseComponent from '../BaseComponent';
import { BaseComponentTemplateSpec } from '../BaseComponent/base-component.tspec';
import Focusable from './Focusable.component';

class FocusableComponent extends BaseComponent<typeof Focusable>
// implements Lightning.Component.ImplementTemplateSpec<FocusableComponentTemplateSpec>
{
    /**
     * This function is responsible for the creation and return of the UI template. This
     * function takes  no parameters and returns the template of the component.
     *
     * @returns Template for the Component.
     *
     */
    static override _template(): Lightning.Component.Template<BaseComponentTemplateSpec<typeof Focusable>> {
        const BaseTemplate = super._template() as Lightning.Component.Template<BaseComponentTemplateSpec<typeof Focusable>>;
        const BaseTemplateWrapper = BaseTemplate.ComponentWrapper;
        console.log(BaseTemplateWrapper);


        BaseTemplateWrapper!.Component = {
            type: Focusable

        };
        return BaseTemplate;
    }
}

export default FocusableComponent;
