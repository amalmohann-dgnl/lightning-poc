import { Colors, Lightning } from "@lightningjs/sdk";
import { FocusBoxTemplateSpec } from "../../../models/template-specs";
import { theme } from "../../../configs";

class FocusBox
    extends Lightning.Component<FocusBoxTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<FocusBoxTemplateSpec>
{
    static override _template(): Lightning.Component.Template<FocusBoxTemplateSpec> {
        return {
            Box: {
                x: 80,
                y: 665,
                InnerBox: {
                    zIndex: 3,
                    w: 100,
                    h: 100,
                    rect: true,
                    shader: { type: Lightning.shaders.RoundedRectangle, radius: 20, stroke: 5, strokeColor: theme.colors.yellow },
                    color: Colors('transparent'),
                }
            },
        };
    }
}

export default FocusBox
