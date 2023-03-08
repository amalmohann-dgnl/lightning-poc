import { Lightning } from '@lightningjs/sdk'
import { theme } from '../../../configs'
import { RailItemTemplateSpec } from '../../../models/template-specs'

class RailItem
    extends Lightning.Component<RailItemTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<RailItemTemplateSpec>
{
    /**
     * This function is responsible for the creation and return of the UI template. This
     * function takes  no parameters and returns the template of the Rail Item component.
     *
     * @returns Template for the Rail Item Component.
     *
     */

    static override _template() {
        return {
            w: 300,
            h: 350,
            rect: true,
            color: theme.colors.primary,
            shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
            Image: {
                w: (w: any) => w,
                h: (h: any) => h - 50,
                shader: {
                    type: Lightning.shaders.RoundedRectangle,
                    radius: [20, 20, 0, 0]
                }
            },
            Label: {
                x: 10,
                y: 302,
                color: theme.colors.white,
                text: { fontSize: 32 }
            }
        }
    }

    /**
     * Setter for setting the values for the item property.
     *
     * @Param The value that needs to be setted to the item property.
     *
     */
    set item(obj: { label: any; src: any }) {
        const { label, src } = obj
        this.patch({
            Image: { src },
            Label: { text: label.toString() }
        })
    }

    /**
     * This function overrides the default behavior of the component when come in focus.
     * We can add all the changes / updates that needs to be made to the component when
     * it comes to the focus.
     *
     */
    override _focus() {
        this.patch({
            smooth: { color: theme.colors.secondary, scale: 1.1 },
            Label: {
                smooth: { color: theme.colors.accent }
            }
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
            Label: {
                smooth: { color: theme.colors.white }
            }
        })
    }
}

export default RailItem
