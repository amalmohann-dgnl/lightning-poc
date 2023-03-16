import { Lightning } from "@lightningjs/sdk";
import { BackButton } from "../../../components";
// import { InputField, Keyboard } from '@lightningjs/ui';
import { Input, Keyboard } from '@lightningjs/ui-components';

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
                InputField: typeof Input,
            }
        };
        Keyboard: typeof Keyboard;
    }


}

export default SearchTemplateSpec;