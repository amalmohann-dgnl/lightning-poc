import { Lightning } from '@lightningjs/sdk';
import { theme } from '../../../configs';
import { VideoSpecItemTemplateSpec } from '../../../models/template-specs';

class VideoSpecItem extends Lightning.Component<VideoSpecItemTemplateSpec> implements Lightning.Component.ImplementTemplateSpec<VideoSpecItemTemplateSpec>{

    static override _template(): Lightning.Component.Template<VideoSpecItemTemplateSpec> {
        return {
          VideoSpec: {
            w: 120,
            h: 80,
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              radius: 20,
              stroke: 8,
              strokeColor: theme.colors.accentGrey.light,
            },
            color: theme.colors.accentGrey.light,
            Spec: {
              mount: 0.5,
              color: theme.colors.accentGrey.light,
              text: {
                fontSize: 22,
                fontFace: "Saira Regular",
                fontStyle: "400",
              },
            },
          },
        };
    }

    set specData(spec: string) {
        this.patch({
            VideoSpec: {
                Spec: {
                    text: spec
                }
            }
        })
    }
}

export default VideoSpecItem;
