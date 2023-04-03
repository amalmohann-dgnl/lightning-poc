import { Lightning } from '@lightningjs/sdk';
import { BackButton, PlayPauseButton } from '../../../components';


interface POCVideoPlayerTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties of the component
     */
    videoUrl: string;
    index: number;
    contentId: string;
    _player: any;
    _isPlaying: boolean;
    // playerLoader: (url: string, videoEl: any, config: object) => Promise<unknown>
    // playerUnLoader: (url: string, videoEl: any, config: object) => void


    /**
    * children of the component
    */
    Wrapper: {
        BackButton: typeof BackButton,
        PlayPause: typeof PlayPauseButton
    }


}

export default POCVideoPlayerTemplateSpec;