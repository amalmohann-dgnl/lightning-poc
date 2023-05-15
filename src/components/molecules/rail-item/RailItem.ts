import { Lightning, Router } from '@lightningjs/sdk'
import { theme } from '../../../configs'
import { Content } from '../../../models/api-request-response';
import { RailItemTemplateSpec } from '../../../models/template-specs'
import { cardSizes, diamensions } from '../../../pages/utils/rail-utils/cardUtils';

class RailItem
    extends Lightning.Component<RailItemTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<RailItemTemplateSpec>
{

    data: Content = {} as Content;
    index: number = 0
    totalElements: number = 0
    cardSize: diamensions = cardSizes.regular

    /**
     * This function is responsible for the creation and return of the UI template. This
     * function takes  no parameters and returns the template of the Rail Item component.
     *
     * @returns Template for the Rail Item Component.
     *
     */

    static override _template() {
        return {
            rect: true,
            color: theme.colors.primary,
            shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
            Image: {
                w: (w: any) => w,
                h: (h: any) => h,
                shader: {
                    type: Lightning.shaders.RoundedRectangle,
                    radius: 20
                }
            },
            Label: {
                x: 10,
                w: (w: number) => w,
                color: theme.colors.accentGrey.light,
                text: { fontSize: 22.5 }
            }
        }
    }

    /**
     * Setter for setting the values for the item property.
     *
     * @Param The value that needs to be setted to the item property.
     *
     */
    set item(obj: { label: any; src: any, data: Content, index: number, totalElements: number, cardSize: diamensions }) {
        const { label, src, data, index, totalElements, cardSize } = obj;
        this.data = data;
        this.index = index;
        this.totalElements = totalElements
        this.cardSize = cardSize
        this.patch({
            Image: {
                src: src
            },
            w: this.cardSize.w,
            h: this.cardSize.h,
            Label: { text: label?.toString(), y: this.cardSize.h + 4 }
        })
    }


    /**
   * This function overrides the default behaviour of keypress 'Enter'.
   * This functions checks the index to see the focused element and decides
   * the route to navigate.
   */
    override _handleEnter() {
        Router.navigate(`content/railItem/${this.data.uid}`, { from: 'Home', data: this.data })
    }



    /**
     * This function overrides the default behavior of the component when come in focus.
     * We can add all the changes / updates that needs to be made to the component when
     * it comes to the focus.
     *
     */
    override _focus() {
        const cardData = {
            cardWidth: this.w,
            cardHeight: this.h,
            cardIndex: this.index,
            railTotalElements: this.totalElements,
            cardSize: this.cardSize
        }
        this.fireAncestors('$changeItemOnFocus' as any, this.data, cardData)
        this.patch({
            // smooth: { color: theme.colors.secondary, scale: 1.1 },
            Label: {
                smooth: { color: theme.colors.white }
            },
            // Rectangle: { color: theme.colors.yellow, x: 10, y: (y: number) => y + 54, w: (w: number) => w - 20, h: 5, rect: true }
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
                smooth: { color: theme.colors.accentGrey.light }
            },
            Rectangle: undefined
        })
    }
}

export default RailItem
