import { Lightning } from '@lightningjs/sdk';
import { BackButton } from '../../../components';


interface PlayPauseButtonTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties of the component
     */
    _isPlaying: boolean;
    // playerLoader: (url: string, videoEl: any, config: object) => Promise<unknown>
    // playerUnLoader: (url: string, videoEl: any, config: object) => void


    /**
    * children of the component
    */
    Background: object;
    Text: object;


}

export default PlayPauseButtonTemplateSpec;