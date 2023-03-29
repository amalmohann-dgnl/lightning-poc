// @ts-nocheck
import { Colors, Lightning, Router, Storage } from '@lightningjs/sdk';
import { SearchTemplateSpec } from "../../models/template-specs";
import theme from '../../configs/theme';
import { BackButton } from "../../components";
// @ts-ignore
import { InputField, Keyboard, Key as BaseKey, } from '@lightningjs/ui';
import Rail from '../../components/organisms/rail/Rail';

class Search
    extends Lightning.Component<SearchTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<SearchTemplateSpec>
{

    index: number = 2;
    intervalSub: number = 0;

    static override _template(): Lightning.Component.Template<SearchTemplateSpec> {
        return {
            w: 1920, h: 1080,
            color: theme.colors.primaryLight,
            rect: true,
            shader: { x: 100, y: -100, pivot: 0.5, type: Lightning.shaders.RadialGradient, outerColor: theme.colors.primaryLight, innerColor: theme.colors.dark, radius: 800 },
            SearchComponent: {
                x: 40, y: 40,
                shader: null,
                SearchBox: {
                    x: 0, y: 60, w: 950, h: 60, rect: true, color: theme.colors.accentGrey.light,
                    shader: { type: Lightning.shaders.RoundedRectangle, radius: 30 },
                    InputWrapper: {
                        x: 20,
                        color: theme.colors.dark,
                        InputField: {
                            y: 20,
                            type: InputField,
                        },
                    },

                },
                BackButton: { type: BackButton },
                Keyboard: {
                    x: 0, y: 140, type: Keyboard, config: keyboardConfig, currentLayout: 'abc', maxCharacters: 24, signals: { onSearch: true }
                },
            }
        };
    }

    async simulateMemoryIntensiveCalculation(): Promise<number> {
        // Allocate a large two-dimensional array to simulate a more memory-intensive calculation
        const arr = new Array(10000).fill(null).map(() => new Array(10000));

        // Fill the array with random numbers
        for (const element of arr) {
            for (let j = 0; j < element.length; j++) {
                element[j] = Math.random();
            }
        }

        // Calculate the sum of the array
        let sum = 0;
        for (const element of arr) {
            for (let j = 0; j < element.length; j++) {
                sum += element[j];
            }
        }

        // Return the sum
        return sum;
    }

    async doComputation(): Promise<void> {
        const result = await this.simulateMemoryIntensiveCalculation()
        console.log(result);

    }


    override _setup() {
        const inputField = this.tag('SearchComponent.SearchBox.InputWrapper.InputField');
        this.tag('Keyboard').inputField(inputField);
    }

    onSearch(event) {
        console.log('search', event.input)
    }


    /**
     * 
     * Memory intensive Testing
     * 
     */
    override _active() {
        super._active();
        this.tag('SearchComponent.SearchBox.InputWrapper.InputField').color = theme.colors.accentGrey.dark
        const LongRail = { type: Rail, x: -30, y: 380, railIndex: 16, }
        this.tag('SearchComponent' as any).patch({ LongRail });
        this.intervalSub = setInterval(() => {
            this.doComputation();
        }, 1000);
    }

    override _inactive() {
        clearInterval(this.intervalSub);
    }


    override _getFocused() {
        return this.tag('Keyboard');
    }

    // overrides the default up button actions
    override _handleUp() {
        if (this.index > 1) {
            this.index -= 1;
        }
    }

    // overrides the default down button actions
    override _handleDown() {
        if (this.index < 3) {
            this.index += 1;
        }
    }

    // overrides the default behavior when enter button is clicked
    override _handleEnter() {
        if (this.index === 1) {
            Router.navigate('home');
        }
    }

    // returns the focused components
    override _getFocused(): any {
        return this.tag('SearchComponent').children[this.index]
    }

}


class Key extends BaseKey {
    _firstActive() {
        this.label = {
            mountY: 0.45
        };
        this.labelColors = {
            unfocused: Colors('white').get(),
            focused: theme.colors.dark
        };
        this.backgroundColors = {
            unfocused: Colors('white').alpha(0).get(),
            focused: theme.colors.white
        };
        if (this.hasFocus()) {
            this._focus();
        }
    }

    static get width() {
        return 90;
    }
    static get height() {
        return 40;
    }
}

class ActionKey extends BaseKey {
    _active() {
        this.label = {
            mountY: 0.45
        };
        this.labelColors = {
            unfocused: Colors('black').get(),
            focused: Colors('white').get()
        };
        this.backgroundColors = {
            unfocused: Colors('white').get(),
            focused: theme.colors.accentGrey.light
        };
        if (this.hasFocus()) {
            this._focus();
        }
    }

    static get height() {
        return 60;
    }

    static get width() {
        return 160;
    }
}

const keyboardConfig = {
    layouts: {
        'abc': [
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
            ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
            ['u', 'v', 'w', 'x', 'y', 'z', '_', '-', '@', '.'],
            ['Layout:ABC', 'Layout:123', 'Space', 'Search', 'Del']
        ],
        'ABC': [
            ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
            ['U', 'V', 'W', 'X', 'Y', 'Z', '_', '-', '@', '.'],
            ['Layout:abc', 'Layout:123', 'Space', 'Search', 'Del']
        ],
        '123': [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ['Layout:abc', 'Space', 'Clear', 'Del']
        ]
    },
    styling: {
        align: 'center',
        horizontalSpacing: 5,
        verticalSpacing: 20,
    },
    buttonTypes: {
        default: {
            type: Key,
        },
        Del: {
            type: ActionKey, icon: 'del'
        },
        Layout: {
            type: ActionKey
        },
        Space: {
            type: ActionKey, w: 280, label: 'space',
        },
        Clear: {
            type: ActionKey, label: 'clear'
        },
        Search: {
            type: ActionKey, label: 'search'
        }
    }
};



export default Search;