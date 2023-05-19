import { Lightning, Router } from "@lightningjs/sdk";
import { ContentDetailsTemplateSpec, SearchTemplateSpec } from "../../models/template-specs";
import theme from '../../configs/theme';
import { BackButton, VideoSpecItem, Button } from "../../components";
import axios from 'axios';
import { Content, Image } from "../../models/api-request-response";
import { PAGETRANSITION } from "../../constants";
import { JavaScriptInterface } from "../../models/JavaScriptInterface";

class ContentDetails
    extends Lightning.Component<ContentDetailsTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<ContentDetailsTemplateSpec>
{
    contentData!: Content;
    contentId: string = '';
    index: number = 1;
    from: string = '';
    LngAndroid: JavaScriptInterface = {} as JavaScriptInterface;


    static override _template(): Lightning.Component.Template<ContentDetailsTemplateSpec> {
        return {
            ContentView: {
                w: 1920, h: 1080,
                color: theme.colors.black,
                rect: true,
                shader: { x: 100, y: -100, pivot: 0.5, type: Lightning.shaders.RadialGradient, outerColor: theme.colors.primaryLight, innerColor: theme.colors.dark, radius: 800 },
                Thumbnail: {
                    x: 1000, y: 110,
                    scale: 1.5,
                    shader: { type: Lightning.shaders.FadeOut, innerColor: theme.colors.black, left: 200, bottom: 200 },
                },
                ContentData: {
                    shader: null,
                    zIndex: 2,
                    Title: {
                        x: 40, y: 165,
                        shader: null,
                        text: {
                            fontSize: 80
                        },
                        color: theme.colors.white,
                    },
                    Description: {
                        x: 40, y: 270,
                        w: 900,
                        shader: null,
                        text: {
                            wordWrap: true,
                            maxLines: 3,
                            maxLinesSuffix: '...',
                            fontSize: 30
                        },
                        color: theme.colors.accentGrey.light,
                    },
                    Genre: {
                        x: 40, y: 380,
                        w: 900,
                        shader: null,
                        text: {
                            fontSize: 24
                        },
                        color: theme.colors.accentGrey.light,
                    },
                    Info: {
                        visible: false,
                        Director: {
                            x: 40, y: 440,
                            w: 100,
                            shader: null,
                            text: {
                                text: 'Director : ',
                                fontSize: 24
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        Starring: {
                            x: 40, y: 470,
                            w: 100,
                            shader: null,
                            text: {
                                text: 'Staring  : ',
                                fontSize: 24,
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        DirectorList: {
                            x: 150, y: 440,
                            w: 800,
                            shader: null,
                            text: {
                                fontSize: 24
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        StarringList: {
                            x: 150, y: 470,
                            w: 800,
                            shader: null,
                            text: {
                                fontSize: 24,
                                wordWrap: true,
                                maxLines: 1,
                                maxLinesSuffix: '...',
                            },
                            color: theme.colors.accentGrey.light,
                        }

                    },
                    VideoSpec: {
                        visible: false,
                        VideoSpec1: {
                            x: 70, y: 140,
                            shader: null,
                            type: VideoSpecItem,
                            specData: '  16+  '
                        },
                        VideoSpec2: {
                            x: 135, y: 140,
                            shader: null,
                            type: VideoSpecItem,
                            specData: '  4k  '
                        },
                        VideoSpec3: {
                            x: 193, y: 140,
                            shader: null,
                            type: VideoSpecItem,
                            specData: '  cc  '
                        },
                    }
                },
                ContentActions: {
                    shader: null,
                    BackButton: {
                        x: 40, y: 40,
                        type: BackButton
                    },
                    PlayButton: {
                        x: 40, y: 570,
                        type: Button,
                        label: "Play Video"
                    },
                    PlayTrailer: {
                        x: 40, y: 700,
                        type: Button,
                        label: "Play Trailer"
                    },
                }
            }
        };
    }

    override _inactive(): void {
        console.log("Inactive");
        this.index = 1;
    }

    override set params(args: { id: string, from: string, data: Content }) {
        const { id, from, data } = args; this.from = from;
        let imgSrc = data.images.find((img: Image) => img.width === 828)?.url;
        this.contentId = id;
        console.log(args);
        this.patch({
            ContentView: {
                shader: { type: Lightning.shaders.RadialGradient, x: 300, y: 300, innerColor: 0xff000000, radius: 1500 },
                Thumbnail: {
                    src: imgSrc
                },
                ContentData: {
                    x: 10,
                    Title: {
                        text: {
                            text: data.title,
                        },
                    },
                    Description: {
                        text: {
                            text: data.description,
                        },
                    },
                    Genre: {
                        text: {
                            text: data.genre.join(' . '),
                        },
                    },
                    Info: {
                        visible: true,
                        DirectorList: {
                            text: {
                                text: data.director.map((a: any) => a.personName).join(', '),
                            },
                        },
                        StarringList: {
                            text: {
                                text: data.actor.map((a: any) => a.personName).join(', '),

                            },
                        }
                    },
                    VideoSpec: {
                        visible: true,
                    }
                }
            }
        })

        this._refocus();
    }



    override _init(): void {
        // this.tag('ContentView.ContentData.Info.Starring' as any).enableClipping()
    }

    // animating elements on netering the page (invoked in the transition)
    animateElements(): void {
        const contentAnimation = this.tag('ContentView.ContentData' as any).animation({
            duration: 1,
            delay: 0,
            actions: [
                { p: 'alpha', v: { 0: 0, 1: 1 } },
                { p: 'y', v: { 0: -60, 1: 0 } },
            ]
        });

        const contentActionsAnimation = this.tag('ContentView.ContentActions' as any).animation({
            duration: 1,
            delay: 0,
            actions: [
                { p: 'alpha', v: { 0: 0, 1: 1 } },
                { p: 'x', v: { 0: -100, 1: 10 } },
            ]
        });

        contentActionsAnimation.start();
        contentAnimation.start();
    }


    // overrides the default up button actions
    override _handleUp(): void {
        if (this.index > 0) {
            this.index -= 1;
        }
    }

    // overrides the default right button actions
    override _handleDown(): void {
        if (this.index < 2) {
            this.index += 1;
        }
    }

    // overrides the default behavior when enter button is clicked
    override _handleEnter(): void {
        console.log(this.from);

        if (this.index === 0) {
            if (this.from == 'gridItem' || this.from == 'Grid') {
                Router.navigate('grid');
            }
            else {
                Router.navigate('home');
            }
        } else {
            console.log(this.contentId);

            this.LngAndroid.openActivity("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"); //for android
            // Router.navigate(`player/${this.contentId}`)
        }
    }

    // returns the focused components
    override _getFocused(): any {
        return this.tag('ContentView.ContentActions' as any).children[this.index]
    }

    // custom page transition
    override pageTransition(pageIn: any, pageOut: any) {
        // resolving if no pageout is defined
        if (!pageOut) return Promise.resolve();

        return new Promise<void>((resolve, reject) => {
            // completing the animations of page out and starting the animation of page in after
            pageOut.pageTransitionOut(pageOut).then(() => {
                // toggle visibility
                pageIn.visible = true;
                pageIn.animateElements();
                resolve()
            });

        })
    }

}

export default ContentDetails;