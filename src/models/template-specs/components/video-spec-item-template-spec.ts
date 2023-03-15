import { Lightning } from "@lightningjs/sdk";

interface VideoSpecItemTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties and functions of the component
     */
    specData: string;


    /**
     * children of the component
     */
    VideoSpec: any;
}

export default VideoSpecItemTemplateSpec;
