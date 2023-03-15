import { Lightning } from '@lightningjs/sdk';

interface ButtonTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
    * properties and functions of the component
    */
    label: string;
    /**
    * children and functions 
    */
    Button: {
        Label: object;
    };
}

export default ButtonTemplateSpec;