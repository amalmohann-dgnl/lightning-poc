import { Lightning } from '@lightningjs/sdk';
import { PlayPauseButtonTemplateSpec } from '../../../models/template-specs';
class PlayPauseButton
    extends Lightning.Component<PlayPauseButtonTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<PlayPauseButtonTemplateSpec>
{

    _isPlaying: boolean = false;


    static override _template(): Lightning.Component.Template<PlayPauseButtonTemplateSpec> {
        return {
            mount: 0.5,
            x: 1920 / 2,
            y: 1080 / 2,
            rect: true,
            w: 150,
            h: 150,
            color: 0x00000000,
            Background: {
                rect: true,
                w: 150,
                h: 150,
                color: 0xffababab,
                shader: {
                    type: Lightning.shaders.RoundedRectangle,
                    radius: 75
                },
            },
            Text: {
                mount: 0.5,
                x: 75,
                y: 75,
                text: {
                    textColor: 0xffffffff,
                    text: 'Pause'
                }
            }
        };
    }

    override _setup() {
        this._isPlaying = true;
    }


    set isPlaying(isPlaying: boolean) {
        this._isPlaying = isPlaying;
        this.tag('Text' as any).patch({
            text: {
                text: isPlaying ? 'Pause' : 'Play'
            }
        });
    }

    get isPlaying(): boolean {
        return this._isPlaying;
    }

}

export default PlayPauseButton;