import { Lightning } from "@lightningjs/sdk";
import { BackButton } from "../../../components";
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
    }


}

export default SearchTemplateSpec;