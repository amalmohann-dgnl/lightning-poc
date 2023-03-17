import { Lightning } from '@lightningjs/sdk';


interface VideoPlayerTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties of the component
     */
    videoUrl: string;
    playerLoader: (url: string, videoEl: any, config: object) => Promise<unknown>
    playerUnLoader: (url: string, videoEl: any, config: object) => void


    /**
    * children of the component
    */


}

export default VideoPlayerTemplateSpec;