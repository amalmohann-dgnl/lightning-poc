import { Lightning } from "@lightningjs/sdk";
import { BaseComponentTemplateSpec, BaseComponentTypeConfig } from './base-component.tspec';


class BaseComponent<T
    extends Lightning.Component.Constructor = Lightning.Component.Constructor>
    extends Lightning.Component<BaseComponentTemplateSpec<T>, BaseComponentTypeConfig>
    implements Lightning.Component.ImplementTemplateSpec<BaseComponentTemplateSpec<T>>{
    static ComponentWrapper: any;

    /**
    * This function is responsible for the creation and return of the UI template. This
    * function takes  no parameters and returns the template of the component.
    *
    * @returns Template for the Component.
    *
    */
    static override _template(): Lightning.Component.Template<BaseComponentTemplateSpec> {
        return {
            ComponentWrapper: {
                Component: undefined
            }
        }
    }


    override _init() {
        console.log("hek")

    }

    override _focus(): void {
        console.log("hello");
    }

}

export default BaseComponent;