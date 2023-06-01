import { Lightning } from '@lightningjs/sdk';
import { theme } from '../../../configs';
import { FocusableTemplateSpec, FocusableTypeConfig } from './Focusable.tspec';

class Focusable extends Lightning.Component<FocusableTemplateSpec, FocusableTypeConfig>
    implements Lightning.Component.ImplementTemplateSpec<FocusableTemplateSpec>
{
    /**
     * This function is responsible for the creation and return of the UI template. This
     * function takes  no parameters and returns the template of the component.
     *
     * @returns Template for the Component.
     *
     */
    static override _template(): Lightning.Component.Template<FocusableTemplateSpec> {
        return {
            Label: {
                x: 10,
                y: 435,
                w: (w: number) => w,
                color: theme.colors.accentGrey.light,
                text: {
                    fontSize: 30,
                    text: 'hello',
                },
            },
        }
    }
}

export default Focusable;
