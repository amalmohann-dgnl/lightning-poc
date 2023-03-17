import { Lightning } from '@lightningjs/sdk';
import { BackButton } from '../../../components';


interface VideoPlayerTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties of the component
     */
    videoUrl: string;
    index: number;
    contentId: string;
    playerLoader: (url: string, videoEl: any, config: object) => Promise<unknown>
    playerUnLoader: (url: string, videoEl: any, config: object) => void


    /**
    * children of the component
    */
    BackButton: typeof BackButton


}

export default VideoPlayerTemplateSpec;