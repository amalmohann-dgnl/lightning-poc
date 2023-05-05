import { Lightning } from "@lightningjs/sdk";
import { FocusBoxTemplateSpec } from "../../../models/template-specs";

class FocusBox
    extends Lightning.Component<FocusBoxTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<FocusBoxTemplateSpec>
{
    static override _template(): Lightning.Component.Template<FocusBoxTemplateSpec> {
        return {
            Box: {
                x: 0,
                y: 0,
                w: 216,
                h: 324,
                rect: true,
                color: 0x00000000,
                shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
            },
        };
    }
}

export default FocusBox
