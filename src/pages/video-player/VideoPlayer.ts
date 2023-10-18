import { Lightning, Registry, Router } from '@lightningjs/sdk';
import { POCVideoPlayerTemplateSpec } from './../../models/template-specs';
import { VideoPlayer as LightningPlayer } from '@lightningjs/sdk'
import { BackButton, PlayPauseButton } from '../../components';
// @ts-ignore
import shaka from 'shaka-player';
import axios from 'axios';


// VideoPlayer component
export class POCVideoPlayer
    extends Lightning.Component<POCVideoPlayerTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<POCVideoPlayerTemplateSpec>
{
    streamUrl = 'https://link.theplatform.eu/s/TLxeCPRc7akL/media/msyvKjzZtAp0?format=SMIL&formats=MPEG-DASH+widevine&tracking=true&userId=guest_defaultUser56896@rally.tv'
    videoUrl = 'https://link.theplatform.eu/s/TLxeCPRc7akL/media/msyvKjzZtAp0?format=SMIL&formats=MPEG-DASH+widevine&tracking=true&userId=guest_defaultUser56896@rally.tv'
    index: number = 1;
    contentId: string = '';
    _isPlaying: boolean = true;
    _player: any;
    _playerData: any;

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
        this.fetchPlayback();
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

    fetchPlayback = async () => {
        console.log('fetching playback');

        const Authorization: string = 'Basic aHR0cDovL2FjY2Vzcy5hdXRoLnRoZXBsYXRmb3JtLmNvbS9kYXRhL0FjY291bnQvMjcwOTUyMDAyODpleUpoYkdjaU9pSlNVelV4TWlKOS5leUp6ZFdJaU9pSjNjbU53Y205a0xXRm5aSEl2TlRRM016VXdPRGsxSWl3aWFYTnpJam9pTVNJc0ltVjRjQ0k2TWpBeE1qUTJNamszTWl3aWFXRjBJam94TmprM01UQXlPVGN5T1RBNExDSnFkR2tpT2lKaU1qVTNNamxtWlMweU5UTXdMVFEyTVRFdFlURmtZUzFrTnpZeE5qWmhZakU0WXpVaUxDSmthV1FpT2lKM2NtTndjbTlrTFdGblpISWlMQ0oxYm0waU9pSnRZWFJvYzBCNWIzQnRZV2xzTG1OdmJTSXNJbU4wZUNJNkludGNJbWxrWENJNlhDSTFORGN6TlRBNE9UVmNJaXhjSW5WelpYSk9ZVzFsWENJNlhDSnRZWFJvYzBCNWIzQnRZV2xzTG1OdmJWd2lMRndpWlcxaGFXeGNJanBjSWx3aUxGd2lablZzYkU1aGJXVmNJanBjSWx3aUxGd2lZWFIwY21saWRYUmxjMXdpT250Y0luVnlianAwYUdWd2JHRjBabTl5YlRwamIyNXpkVzFsY2pwaFkyTnZkVzUwWENJNlhDSm9kSFJ3Y3pvdkwyRmpZMjkxYm5SekxtRjFaR2xsYm1ObExuUm9aWEJzWVhSbWIzSnRMbVYxTDJGalkyOTFiblJ6THpJM01EazFNakF3TWpndk9URTJaakZtTURZdE1XVXlOUzAwTW1JekxXSmtZVGd0TlRWbVpqQmlZakl6TUdJeVhDSXNYQ0oxY200NmRHaGxjR3hoZEdadmNtMDZZMjl1YzNWdFpYSTZZV05qYjNWdWREcHdaWEp6YjI1aFhDSTZYQ0pvZEhSd2N6b3ZMMkZqWTI5MWJuUnpMbUYxWkdsbGJtTmxMblJvWlhCc1lYUm1iM0p0TG1WMUwyRmpZMjkxYm5Sekx6STNNRGsxTWpBd01qZ3ZPVEUyWmpGbU1EWXRNV1V5TlMwME1tSXpMV0prWVRndE5UVm1aakJpWWpJek1HSXlMM0JsY25OdmJtRnpMMlZtWVdOaVpqYzRMV1pqT1RNdE5HSXhZaTA1TTJVeExUTmlNREJsWmpBeFpHUmlaVndpZlgxY2JpSXNJbTlwWkNJNklqSTNNRGsxTWpBd01qZ2lmUS5RMVV5dHdfNUpEd1pDN2ViUUhvc0IxTWl0WW94aHBfRzVZb1pGY2JoZ3RsbVh2TlQwdEVvTEFWU0tlREhjYkVXWU5xQlhpMENpbGJWR0k0RjZxYUhJcUk4V055c1hvYzY0TEZFUFR0THNHc1RtVGdlNTRxVjE2VjBrN1B6bHVaTGNiTzZCRUd4c1FGSzRDdmNLcHpURHQwUzlsOTVjVlRSZ0NSblB2Q3g5UERiWmozOS1LMlBaTjVqc1Z6b09Wa3hlZEd4cm5ma1dZU2poM1p3d0NNYUlrbHBTRDloR3l1bGVrTkRCTXR4QktJUHFfZUtqMzhISF9ZOVBtXzVQUlhRSjh4Q2c0eGx1QnZuSWpEeWJQdGlmU3BSWDhmWnAzaHl6VlFCV1ZvWUo4RGJmdzF0MDRRTEk4NkFBeE5XQnVUZG9LLS1NNFFXcmppdHdmT2gxTXhfN1E=';
        const response = await axios.get(this.streamUrl, {
            headers: {
                Authorization: Authorization
            }
        });
        const xmlDocString: string = response.data;
        const parsedSMIL: any = this.parseSMIL(xmlDocString);

        parsedSMIL.authToken = Authorization;
        parsedSMIL.mpxAccountId = '2709520028';
        const licenseUrl = this.frameLicenseURL(parsedSMIL.pid);
        if (parsedSMIL.isException) {
            // There is an Error from SMIL, So throw the error and abort playback.
            //TODO: Handle the error
            console.log(parsedSMIL.exception, parsedSMIL.responseCode);
            return
        }

        const playbackData = {
            ...parsedSMIL, licenseUrl: 'https://widevine.entitlement.theplatform.eu/wv/web/ModularDrm/getRawWidevineLicense?schema=1.0&releasePid=1vMlM4oUYjH8', Authorization
        }
        this._playerData = playbackData;


    }

    // handling okay button click
    override _handleEnter() {
        if (this.index === 0) {
            Router.navigate(`content/railItem/${this.contentId}`);
        }
        else if (this.index === 1) {
            console.log('open the player');
            LightningPlayer.open('https://wrc-vod-prod.akamaized.net/prod/video/dash/WRC_Production_-_Main/213/768/1543190085061-1696948000224-master.mpd')





            // const button = this.tag('PlayPause' as any);
            // button.isPlaying = !button.isPlaying;
            // button.isPlaying ? LightningPlayer.play() : LightningPlayer.pause();
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
        console.log('setting the shaka player');
        const authToken = this._playerData.Authorization;
        videoEl.autoplay = true;
        this._player = new shaka.Player(videoEl);
        const protection = {
            drm: {
                servers: {
                    'com.widevine.alpha': this._playerData.licenseUrl,
                },
            },
        }
        this._player.configure(protection);
        this._player.getNetworkingEngine().registerRequestFilter(function (type: any, request: any) {
            if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
                request.headers['Authorization'] = authToken;
            }
        });

        console.log(authToken);
        console.log(this._player);


    }

    frameLicenseURL = (pid: string) => {
        const widevineLicenseBaseURL: string = "https://widevine.entitlement.theplatform.eu/wv/web/ModularDrm/getRawWidevineLicense?schema=1.0&releasePid=";
        const licenseUrl = widevineLicenseBaseURL + pid;
        return licenseUrl;
    };


    generateRandomNumber = () => {
        let randomNumber = '';
        const digits = '0123456789';
        for (let i = 0; i < 10; i++) {
            randomNumber += digits[Math.floor(Math.random() * 10)];
        }
        return randomNumber;
    };

    parseXML = (txt: string) => {
        var xmlDoc;
        if (window.DOMParser) {
            xmlDoc = new DOMParser().parseFromString(txt, "text/xml");
        } else {
            // Internet Explorer
            //@ts-ignore
            xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(txt);
        }

        return xmlDoc;
    }


    parseSMIL = (xmlDocString: string) => {
        const loadStatus = '';
        const uuid = this.generateRandomNumber();

        let pid: string = '';
        let lockId: string = '';
        let lockSequenceToken: string = '';
        let lock: string = '';
        let updateLockInterval: string = '';

        //parse the xml document string.
        const smilData: Document = this.parseXML(xmlDocString);

        /**
         * exctract the essential properties from the xml file.
         */
        //get the video tag and the manifest url
        const video: HTMLVideoElement | undefined = smilData.getElementsByTagName('video')[0];
        const manifest: string = (video && video.getAttribute('src')) ?? '';

        //get the thumbnail
        const thumbnailElement: Element | undefined = smilData.getElementsByTagName('imagestream')?.[0];
        const thumbnailUrl: string = (thumbnailElement && thumbnailElement.getAttribute('src')) ?? '';

        //get the token from the smil
        const param: Element | null = smilData.querySelector("param[name='token']");
        const token: string = (param && param.getAttribute('value')) ?? '';

        //get the exception details from smil
        const isExceptionParam: Element | null = smilData.querySelector("param[name='isException']");
        const isException: string = (isExceptionParam && isExceptionParam.getAttribute('value')) ?? '';
        const exceptionParam: Element | null = smilData.querySelector("param[name='exception']");
        const exception: string = (exceptionParam && exceptionParam.getAttribute('value')) ?? '';

        //get response code
        const responseCodeParam: Element | null = smilData.querySelector("param[name='responseCode']");
        const responseCode: string = (responseCodeParam && responseCodeParam.getAttribute('value')) ?? '';

        //get tracking data
        const trackingDataParam: Element | null = smilData.querySelector("param[name='trackingData']");
        const trackingDataValue: string = (trackingDataParam && trackingDataParam.getAttribute('value')) ?? '';
        const trackingDataValueArray: string[] | string = (trackingDataValue && trackingDataValue.split('|')) ?? '';
        //get loop throught the tracking data
        if (trackingDataValueArray) {
            for (let i = 0; i < trackingDataValueArray.length; i++) {
                const t = trackingDataValueArray[i]?.split('=');
                if (t && t[0] === 'pid' && t[1]) {
                    //to get the pid for license url
                    pid = t[1];
                    break;
                }
            }
        }

        //get the concurrency server url
        const concurrencyServiceUrlTag: Element | null = smilData.querySelector("meta[name='concurrencyServiceUrl']");
        const concurrencyServiceUrl = (concurrencyServiceUrlTag && concurrencyServiceUrlTag.getAttribute('content')) ?? '';
        let concurrencyLockUrl = `${concurrencyServiceUrl}/web/Concurrency/update?form=json&schema=1.0&`;
        if (uuid) concurrencyLockUrl += `_clientId=${window.encodeURIComponent(uuid)}&`;
        let concurrencyUnlockUrl = `${concurrencyServiceUrl}/web/Concurrency/unlock?form=json&schema=1.0&`;
        if (uuid) concurrencyUnlockUrl += `_clientId=${window.encodeURIComponent(uuid)}&`;

        //get the lock interval
        const updateLockIntervalTag: Element | null = smilData.querySelector("meta[name='updateLockInterval']");
        updateLockInterval = (updateLockIntervalTag && updateLockIntervalTag.getAttribute('content')) ?? '';

        //get the lock id
        const lockIdTag: Element | null = smilData.querySelector("meta[name='lockId']");
        lockId = (lockIdTag && lockIdTag.getAttribute('content')) ?? '';

        //get the lock sequence token
        const lockSequenceTokenTag: Element | null = smilData.querySelector("meta[name='lockSequenceToken']");
        lockSequenceToken = (lockSequenceTokenTag && lockSequenceTokenTag.getAttribute('content')) ?? '';

        //get the lock
        const lockTag = smilData.querySelector("meta[name='lock']");
        lock = (lockTag && lockTag.getAttribute('content')) ?? '';

        //set the concurrency data
        const concurrencyData = {
            concurrencyLockUrl,
            concurrencyUnlockUrl,
            lock,
            lockId,
            lockSequenceToken,
        };

        //set the parsed smil data
        const parsedSmil = {
            pid,
            updateLockInterval,
            responseCode,
            exception,
            isException,
            token,
            manifest,
            loadStatus,
            thumbnailUrl,
            inititalConcurrencyDataFromSMIL: concurrencyData,
        };

        return parsedSmil;
    };


}