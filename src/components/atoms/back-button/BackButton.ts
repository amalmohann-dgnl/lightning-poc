import { Lightning } from '@lightningjs/sdk';
import theme from '../../../configs/theme';
import { BackButtonTemplateSpec } from '../../../models/template-specs';
class BackButton
    extends Lightning.Component<BackButtonTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<BackButtonTemplateSpec>
{

    static override _template(): Lightning.Component.Template<BackButtonTemplateSpec> {
        return {
            Back: {
                w: 80,
                color: theme.colors.accentGrey.light,
                text: { text: 'Back', fontSize: 35 }
            },
        };
    }


    /**
     * This function overrides the default behavior of the component when come in focus.
     * We can add all the changes / updates that needs to be made to the component when
     * it comes to the focus.
     *
     */
    override _focus() {
        this.patch({
            smooth: { scale: 1.1 },
            Back: {
                smooth: { color: theme.colors.white }
            },
            Rectangle: { color: theme.colors.yellow, x: 2, y: (y: number) => y + 50, w: 80, h: 5, rect: true }
        })
    }

    /**
     * This function overrides the default behavior of the component when goes out of focus.
     * We can add all the changes / updates that needs to be made to the component when
     * it goes out of the focus.
     *
     */
    override _unfocus() {
        this.patch({
            smooth: { color: theme.colors.primary, scale: 1.0 },
            Back: {
                smooth: { color: theme.colors.accentGrey.light }
            },
            Rectangle: undefined
        })
    }

}

export default BackButton;