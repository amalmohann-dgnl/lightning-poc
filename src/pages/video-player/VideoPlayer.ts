import { Lightning, Registry, Router } from '@lightningjs/sdk';
import { POCVideoPlayerTemplateSpec } from './../../models/template-specs';
import { VideoPlayer as LightningPlayer } from '@lightningjs/sdk'
import { BackButton, PlayPauseButton } from '../../components';
// @ts-ignore
import shaka from 'shaka-player';


// VideoPlayer component
export class POCVideoPlayer
    extends Lightning.Component<POCVideoPlayerTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<POCVideoPlayerTemplateSpec>
{

    videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    index: number = 1;
    contentId: string = '';
    _isPlaying: boolean = true;
    _player: any;

    /**
     * This function is responsible for the creation and return of the UI template. This function 
     * takes  no parameters and returns the template.
     * 
     * @returns Template for the Application
     * 
     */
    static override _template(): Lightning.Component.Template<POCVideoPlayerTemplateSpec> {
        return {
            Wrapper: {
                alpha: 1,
                BackButton: {
                    x: 40, y: 40,
                    zIndex: 99,
                    type: BackButton
                },
                PlayPause: {
                    type: PlayPauseButton
                }
            }
        };
    }

    override set params(args: any) {
        const { id } = args;
        this.contentId = id;

    }

    // when the playe is shown in the screen and active for the first time 
    override _firstActive() {
        LightningPlayer.consumer(this)
        LightningPlayer.loader(this._loadPlayback);
        LightningPlayer.unloader(this._unloadPlayback);
        this._toggleUI();
    }


    // initializing the component
    override _init() {

    }

    override _active() {
        LightningPlayer.open(this.videoUrl)
        this._toggleUI();
    }

    override _inactive() {
        LightningPlayer.close()
    }


    // handling up button click
    override _handleUp() {
        if (this.index > 0) {
            this.index -= 1;
        }
        this._toggleUI();
    }

    // handling down button click
    override _handleDown() {
        if (this.index < 1) {
            this.index += 1;
        }
        this._toggleUI();
    }

    // handling okay button click
    override _handleEnter() {
        if (this.index === 0) {
            Router.navigate(`content/railItem/${this.contentId}`);
        }
        else if (this.index === 1) {
            const button = this.tag('PlayPause' as any);
            button.isPlaying = !button.isPlaying;
            button.isPlaying ? LightningPlayer.play() : LightningPlayer.pause();
        }
        this._toggleUI();
    }

    override _getFocused(): any {
        return this.tag('Wrapper' as any).children[this.index]
    }



    // toggle ui
    _toggleUI = () => {
        this.tag('Wrapper' as any).setSmooth('alpha', 1);
        const timeOutId = Registry.setTimeout(() => {
            this.tag('Wrapper' as any).setSmooth('alpha', 0);
            Registry.clearTimeout(timeOutId);
        }, 4000);
    }

    /**
     * 
     * video Player functions
     * 
     */

    // Note: this is in fact the default loader function
    _loadPlayback = async (url: string, videoEl: HTMLVideoElement) => {
        this._setupShakaPlayer(videoEl);
        await this._player.load(url);
        this._toggleUI();
    }

    // Note: this is in fact the default unloader function
    _unloadPlayback = async () => {
        await this._player.unload();
    }

    // shaka player
    _setupShakaPlayer(videoEl: HTMLVideoElement) {
        videoEl.autoplay = true;
        this._player = new shaka.Player(videoEl);
        console.log(this._player);
    }

}