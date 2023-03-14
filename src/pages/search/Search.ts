import { Lightning, Router } from "@lightningjs/sdk";
import { Button, Input } from "@lightningjs/ui-components";
import { SearchTemplateSpec } from "../../models/template-specs";
import theme from '../../configs/theme';
import { BackButton } from "../../components";
import axios from 'axios';

class Search
    extends Lightning.Component<SearchTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<SearchTemplateSpec>
{

    index: number = 0;

    static override _template(): Lightning.Component.Template<SearchTemplateSpec> {
        return {
            w: 1920, h: 1080,
            color: theme.colors.primaryLight,
            rect: true,
            shader: { x: 100, y: -100, pivot: 0.5, type: Lightning.shaders.RadialGradient, outerColor: theme.colors.primaryLight, innerColor: theme.colors.dark, radius: 800 },
            SearchComponent: {
                x: 40, y: 40,
                shader: null,
                BackButton: { type: BackButton },
                SearchBox: {
                    x: 150, w: 800, h: 60, rect: true, color: theme.colors.white,
                    shader: { type: Lightning.shaders.RoundedRectangle, radius: 30 },
                },
                Keyboard: {
                    x: 0, y: 120, w: 600, h: 700, rect: true, color: theme.colors.white,

                }
            }
        };
    }

    // override pageTransition() {
    //     return 'left' 
    // }

    // overrides the default left button actions
    override _handleLeft() {
        if (this.index > 0) {
            this.index -= 1;
        }
    }

    // overrides the default right button actions
    override _handleRight() {
        if (this.index < 2) {
            this.index += 1;
        }
    }

    // overrides the default behavior when enter button is clicked
    override _handleEnter() {
        if (this.index === 0) {
            Router.navigate('home');
        }
    }

    // returns the focused components
    override _getFocused(): any {
        return this.tag('SearchComponent').children[this.index]
    }

}

export default Search;