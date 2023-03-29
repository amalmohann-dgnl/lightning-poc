import { Lightning } from "@lightningjs/sdk";
import { BackButton, Rail } from "../../../components";
// @ts-ignore
import { InputField, Keyboard } from '@lightningjs/ui';

interface SearchTemplateSpec extends Lightning.Component.TemplateSpecLoose {
    /**
     * properties of the component
     */
    index: number;

    /**
    * children of the component
    */
    SearchComponent: {
        BackButton: typeof BackButton;
        SearchBox: {
            InputWrapper: {
                InputField: typeof InputField,
            }
        };
        Keyboard: typeof Keyboard;
        LongRail: typeof Rail;
    }


}

export default SearchTemplateSpec;