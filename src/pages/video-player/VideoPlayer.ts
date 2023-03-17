import { Lightning, } from '@lightningjs/sdk';
import { VideoPlayerTemplateSpec } from './../../models/template-specs';
import { VideoPlayer as LightningPlayer } from '@lightningjs/sdk'

// VideoPlayer component
export class VideoPlayer
    extends Lightning.Component<VideoPlayerTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<VideoPlayerTemplateSpec>
{

    videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

    /**
     * This function is responsible for the creation and return of the UI template. This function 
     * takes  no parameters and returns the template.
     * 
     * @returns Template for the Application
     * 
     */
    static override _template(): Lightning.Component.Template<VideoPlayerTemplateSpec> {
        return {};
    }

    // when the playe is shown in the screen and active for the first time 
    override _firstActive() {
        LightningPlayer.consumer(this)
    }


    // initializing the component
    override _init() {

    }

    override _active() {
        LightningPlayer.loader(this.playerLoader)
        LightningPlayer.open(this.videoUrl)
    }

    override _inactive() {
        LightningPlayer.close()
    }


    /**
     * 
     * video Player functions
     * 
     */

    // Note: this is in fact the default loader function
    playerLoader = (url: string, videoEl: any, config: object) => {
        return new Promise((resolve: any) => {
            videoEl.setAttribute('src', url)
            videoEl.load()
            resolve()
        })
    }

    // Note: this is in fact the default unloader function
    playerUnLoader = (url: string, videoEl: any, config: object) => {
        new Promise((resolve: any) => {
            videoEl.removeAttribute('src')
            videoEl.load()
            resolve()
        })
    }



    // handling up button click
    override _handleUp() { }

    // handling down button click
    override _handleDown() { }

    /**
       * This function will override the default behavior of the getFocused() method
       * 
       * @returns Return the child Component that this Component wishes to receive focus. Returning null 
       * or undefined tells the focus engine to not set focus on this Component at all.By default,
       * this Component's own instance is returned.
       */

    override _getFocused(): any { }

}