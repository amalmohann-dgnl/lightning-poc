import { Lightning, Router } from '@lightningjs/sdk'
import { theme } from '../../../configs'
import { Content } from '../../../models/api-request-response';
import { RailItemTemplateSpec } from '../../../models/template-specs'
// @ts-ignore
import { ProgressBar } from '@lightningjs/ui'
import VideoSpecItem from '../../atoms/video-spec-item/VideoSpecItem';
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
            color: theme.colors.accentGrey.dark,
            shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
            Image: {
                w: (w: any) => w,
                h: (h: any) => h,
                shader: { type: Lightning.shaders.FadeOut, innerColor: theme.colors.black, bottom: 200 },
            },
            Label: {
                x: 10,
                y: 326.25,
                w: (w: number) => w,
                color: theme.colors.accentGrey.light,
                text: { fontSize: 22.5 }
            },
            ProgressBar: {
                h: 5, w: 200,
                x: 10, y: cardSizes.regular.h - 20,
                type: ProgressBar,
                progressColorFocused: theme.colors.yellow,
                progressColor: theme.colors.yellow,
            },

            VideoSpec: {
                visible: true,
                VideoSpec1: {
                    x: 55, y: 25,
                    shader: null,
                    type: VideoSpecItem,
                    specData: '  16+  ',
                    customColor: theme.colors.yellow
                },
                VideoSpec2: {
                    x: 120, y: 25,
                    shader: null,
                    type: VideoSpecItem,
                    specData: '  4k  ',
                    customColor: theme.colors.yellow

                },
                VideoSpec3: {
                    x: 175, y: 25,
                    shader: null,
                    type: VideoSpecItem,
                    specData: '  cc  ',
                    customColor: theme.colors.yellow

                },
            },
            PlayButton: {
                h: 100,
                visible: false,
                text: {
                    fontSize: 35, textColor: theme.colors.white,
                    textAlign: 'left', textIndent: 20, textBaseline: 'hanging',
                    text: "Play Video",
                    mountY: 0.5,
                }
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
                src: src,
                shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },

            },
            Label: { y: this.cardSize.h + 10, text: label?.toString() },
            w: this.cardSize.w,
            h: this.cardSize.h,
            ProgressBar: {
                x: 10, y: this.cardSize.h - 20,
                w: this.cardSize.w - 20,
                value: Math.floor(Math.random() * 101)
            }
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
        this.patch({
            //     // smooth: { color: theme.colors.black, scale: 1.1 },
            Image: {
                shader: { type: Lightning.shaders.FadeOut, innerColor: theme.colors.black, top: 200, bottom: 200, },
            },
            Label: {
                smooth: { color: theme.colors.white }
            },
            Rectangle: { color: theme.colors.yellow, x: 10, y: (y: number) => y + 54, w: (w: number) => w - 20, h: 5, rect: true },
            PlayButton: {
                visible: true,
                color: theme.colors.yellow,
                y: this.cardSize.h / 2,
            }
        })
        const cardData = {
            cardWidth: this.w,
            cardHeight: this.h,
            cardIndex: this.index,
            railTotalElements: this.totalElements,
            cardSize: this.cardSize
        }
        this.fireAncestors('$changeItemOnFocus' as any, this.data, cardData)
    }

    /**
     * This function overrides the default behavior of the component when goes out of focus.
     * We can add all the changes / updates that needs to be made to the component when
     * it goes out of the focus.
     *
     */
    override _unfocus() {
        this.patch({
            // smooth: { color: theme.colors.accentGrey.dark, scale: 1.0 },
            Label: {
                smooth: { color: theme.colors.accentGrey.light }
            },
            Rectangle: undefined,
            PlayButton: {
                visible: false,
            },
        })
    }
}

export default RailItem
