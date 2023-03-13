import { Lightning } from "@lightningjs/sdk";

interface TopNavTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties and functions of the Rail component
     */


    /**
     * children of the Rail component
     */
    Navbar: {
        NavItems: {
            Profile: object;
            NavMenu: object;
        };
    }
}

export default TopNavTemplateSpec;
