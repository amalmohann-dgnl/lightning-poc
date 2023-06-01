import { Lightning } from "@lightningjs/sdk";

/**
 * 
 * @interface TemplateSpec - template specification of the component template
 * @interface TypeConfig - type configs define the other types, outside the template spec, that are used by the component.
 * 
 * @author amalmohann
 */
/**
 * Each Component you define a Template which defines the starting properties, structure of children and properties of the children. 
 * For TypeScript to be aware of the structure of a Component’s Template, you need to define what we call a Template Spec.
 */
export interface FocusableTemplateSpec extends Lightning.Component.TemplateSpec {
    Label: any;
}

// Type configs define the other types, outside the template spec, that are used by the component.
export interface FocusableTypeConfig extends Lightning.Component.TypeConfig {
    x: number; //mount point on x axis
    y: number; //mount point on y axis
    height: number; // height of the component
    width: number;  // width of the component
}