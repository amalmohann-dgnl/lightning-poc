import { Lightning } from '@lightningjs/sdk'
import { theme } from '../../../configs'
import { NavTextItemTemplateSpec } from '../../../models/template-specs'

class NavTextItem
    extends Lightning.Component<NavTextItemTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<NavTextItemTemplateSpec>
{

    /**
     * This function is responsible for the creation and return of the UI template. This
     * function takes  no parameters and returns the template of the component.
     *
     * @returns Template for the Component.
     *
     */

    static override _template() {

        return {
            NavText: {
                w: 120,
                color: theme.colors.accentGrey.light,
                text: { fontSize: 35 }
            },
        }
    }

    /**
     * Setter for setting the values for the item property.
     *
     * @Param The value that needs to be setted to the item property.
     *
     */
    set navtext(text: string) {
        this.patch({
            NavText: {
                text: text?.toString()
            },
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
            smooth: { scale: 1.1 },
            NavText: {
                smooth: { color: theme.colors.white }
            },
            Rectangle: { color: theme.colors.yellow, x: 2, y: (y: number) => y + 50, w: 100, h: 5, rect: true }
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
            NavText: {
                smooth: { color: theme.colors.accentGrey.light }
            },
            Rectangle: undefined
        })
    }
}

export default NavTextItem