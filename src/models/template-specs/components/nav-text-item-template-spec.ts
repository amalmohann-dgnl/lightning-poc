import { Lightning } from '@lightningjs/sdk';

interface NavTextItemTemplateSpec extends Lightning.Component.TemplateSpecLoose {
    /**
    * properties and functions of the component
    */
    navItem: string;

    /**
    * children and functions of the component
    */
}

export default NavTextItemTemplateSpec;