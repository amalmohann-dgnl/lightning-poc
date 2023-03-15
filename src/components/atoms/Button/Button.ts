import { Lightning } from '@lightningjs/sdk';
import theme from '../../../configs/theme';
import { ButtonTemplateSpec } from '../../../models/template-specs';
class Button
    extends Lightning.Component<ButtonTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<ButtonTemplateSpec>
{

    static override _template(): Lightning.Component.Template<ButtonTemplateSpec> {
        return {
            Button: {
                w: 500, h: 100,
                color: 0x00000000,
                rect: true,
                shader: { type: Lightning.shaders.RadialGradient, innerColor: theme.colors.accentGrey.dark },
                Label: {
                    shader: null,
                    h: h => h,
                    text: {
                        fontSize: 35, textColor: theme.colors.white,
                        textAlign: 'left', textIndent: 20, textBaseline: 'hanging'
                    }
                }

            },
        };
    }

    set label(text: string) {
        this.patch({
            Button: {
                Label: {
                    text: text
                }
            }
        });
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
            Button: {
                shader: { innerColor: 0xAAF2DB59 },
                Label: {
                    text: {
                        textColor: theme.colors.white,
                    }
                }
            },
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
            smooth: { scale: 1.0 },
            Button: {
                shader: { innerColor: theme.colors.accentGrey.dark },
            },
        })
    }

}

export default Button;