import { Lightning, Router } from "@lightningjs/sdk";
import { PreviewComponentTemplateSpec } from "../../../models/template-specs";
import theme from '../../../configs/theme';
import { VideoSpecItem } from "../../../components";
import { Content, Image } from "../../../models/api-request-response";

class PreviewComponent
    extends Lightning.Component<PreviewComponentTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<PreviewComponentTemplateSpec>
{
    contentData!: Content;
    contentId: string = '';
    index: number = 1;
    from: string = '';

    static override _template(): Lightning.Component.Template<PreviewComponentTemplateSpec> {
        return {
            ContentView: {
                Thumbnail: {
                    x: 1000, y: 110,
                    scale: 1.5,
                    shader: { type: Lightning.shaders.FadeOut, innerColor: 0xff000000, left: 200, bottom: 200 },
                },
                ContentDetails: {
                    ContentData: {
                        shader: null,
                    },
                },
            }
        };
    }

    override _inactive(): void {
        console.log("Inactive");
        this.index = 1;
    }

    set data(eventDetails: Content) {
        console.log(eventDetails);
        this.patch({
            ContentView: {
                shader: { type: Lightning.shaders.RadialGradient, x: 300, y: 300, innerColor: 0xff000000, radius: 1500 },
                Thumbnail: {
                    src: eventDetails.images.find((img: Image) => img.width === 828)?.url,
                },
                ContentDetails: {
                    ContentData: {
                        zIndex: 2,
                        Title: {
                            x: 40, y: 165,
                            shader: null,
                            text: {
                                text: eventDetails.title,
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
                                text: eventDetails.description,
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
                                text: eventDetails.genre.join(' . '),
                                fontSize: 24
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        Info: {
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
                                    text: eventDetails.director.map((a: any) => a.personName).join(', '),
                                    fontSize: 24
                                },
                                color: theme.colors.accentGrey.light,
                            },
                            StarringList: {
                                x: 150, y: 470,
                                w: 800,
                                shader: null,
                                text: {
                                    text: eventDetails.actor.map((a: any) => a.personName).join(', '),
                                    fontSize: 24,
                                    wordWrap: true,
                                    maxLines: 1,
                                    maxLinesSuffix: '...',
                                },
                                color: theme.colors.accentGrey.light,
                            }

                        },
                        VideoSpec: {
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
                }
            }
        })

    }


    override _init(): void {
        // this.tag('ContentView.ContentData.Info.Starring' as any).enableClipping()
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
            Router.navigate(`player/${this.contentId}`)
        }
    }

    // returns the focused components
    override _getFocused(): any {
        return this.tag('ContentView.ContentActions' as any).children[this.index]
    }


}

export default PreviewComponent;