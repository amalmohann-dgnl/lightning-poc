import { Lightning } from "@lightningjs/sdk";
import { BackButton } from "../../../components";

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
        SearchBox: object;
        Keyboard: any;
    }


}

export default SearchTemplateSpec;