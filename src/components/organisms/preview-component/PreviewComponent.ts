import { Lightning, Utils } from "@lightningjs/sdk";
import { PreviewComponentTemplateSpec } from "../../../models/template-specs";
import theme from '../../../configs/theme';
import { VideoSpecItem } from "../../../components";

class PreviewComponent
    extends Lightning.Component<PreviewComponentTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<PreviewComponentTemplateSpec>
{
    static override _template(): Lightning.Component.Template<PreviewComponentTemplateSpec> {
        return {
            ContentView: {
                Thumbnail: {
                    x: 1000, y: 110,
                    scale: 1.5,
                    shader: { type: Lightning.shaders.FadeOut, innerColor: theme.colors.black, left: 200, bottom: 200 },
                },
                ContentDetails: {
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
                },
            }
        };
    }

    override _inactive(): void {
        console.log("Inactive");
    }

    set data(eventDetails: { imgSrc: string, title: string, description: string, genre: string, directorsList: string, actorsList: string }) {
        console.log(eventDetails);

        const { imgSrc, title, description, genre, directorsList, actorsList } = eventDetails;

        const thumbnailAnimation = this.tag('ContentView.Thumbnail' as any).animation({
            duration: 0.5,
            delay: 0.5,
            autoStop: true,
            actions: [
                { p: 'src', v: { 0: '', 0.6: imgSrc } },
                { p: 'alpha', v: { 0: 1, 0.5: 0, 1: 1 } }
            ]
        });

        const contentAnimation = this.tag('ContentView.ContentDetails' as any).animation({
            duration: 1,
            delay: 0,
            actions: [
                { p: 'alpha', v: { 0: 1, 0.6: 0, 0.8: 0, 1: 1 } },
                { p: 'x', v: { 0: 10, 0.6: -100, 0.65: 10 } },
                { p: 'y', v: { 0: 0, 0.6: 0, 0.7: -30, 1: 0 } },
            ]
        });


        // patching
        this.patch({
            ContentView: {
                shader: { type: Lightning.shaders.RadialGradient, x: 300, y: 300, innerColor: 0xff000000, radius: 1500 },
                ContentDetails: {
                    x: 10,
                    ContentData: {
                        Title: {
                            text: {
                                text: title,
                            },
                        },
                        Description: {
                            text: {
                                text: description,
                            },
                        },
                        Genre: {
                            text: {
                                text: genre,
                            },
                        },
                        Info: {
                            visible: true,
                            DirectorList: {
                                text: {
                                    text: directorsList,
                                },
                            },
                            StarringList: {
                                text: {
                                    text: actorsList,

                                },
                            }
                        },
                        VideoSpec: {
                            visible: true,
                        }
                    }
                }
            }
        })

        thumbnailAnimation.start();
        contentAnimation.start();
    }

    override _init(): void {
        this.tag('ContentView.Thumbnail' as any).on('txError', () => {
            console.error('texture failed to load: ' + this.tag('ContentView.Thumbnail' as any).src)
            // show placeholder
            this.tag('ContentView.Thumbnail' as any).src = Utils.asset('/static/images/background.png');
        })
    }

}

export default PreviewComponent;