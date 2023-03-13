import { Lightning } from "@lightningjs/sdk";

interface TopNavTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties and functions of the component
     */


    /**
     * children of the component
     */
    Navbar: {
        NavItems: {
            NavMenu: object;
        };
    }
}

export default TopNavTemplateSpec;
