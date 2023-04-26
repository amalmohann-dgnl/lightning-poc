import { Lightning, Router } from "@lightningjs/sdk";
import { ContentDetailsTemplateSpec, SearchTemplateSpec } from "../../models/template-specs";
import theme from '../../configs/theme';
import { BackButton, VideoSpecItem, Button } from "../../components";
import axios from 'axios';
import { Content, Image } from "../../models/api-request-response";

class ContentDetails
    extends Lightning.Component<ContentDetailsTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<ContentDetailsTemplateSpec>
{
    contentData!: Content;
    contentId: string = '';
    index: number = 1;
    from: string = '';

    // readonly contentView = this.getByRef("ContentView")!;
    // readonly spinner = this.contentView.getByRef("Spinner")!;
    // readonly background = this.contentView.getByRef("Background")!;
    // readonly contentDataView = this.contentView.getByRef("ContentData")!;
    // readonly thumbnail = this.contentDataView.getByRef("Thumbnail")!;
    // readonly title = this.contentDataView.getByRef("Title")!;
    // readonly description = this.contentDataView.getByRef("Description")!;
    // readonly genre = this.contentDataView.getByRef("Genre")!;
    // readonly info = this.contentDataView.getByRef("Info")!;


    static override _template(): Lightning.Component.Template<ContentDetailsTemplateSpec> {
        return {
            ContentView: {
                w: 1920, h: 1080,
                color: theme.colors.primaryLight,
                rect: true,
                shader: { x: 100, y: -100, pivot: 0.5, type: Lightning.shaders.RadialGradient, outerColor: theme.colors.primaryLight, innerColor: theme.colors.dark, radius: 800 },
                // Spinner: {
                //     w: 100, h: 100, mount: 0.5,
                //     x: (x: number) => x / 2,
                //     y: (y: number) => y / 2,
                //     rect: true,
                //     shader: { type: Lightning.shaders.Spinner2, stroke: 5 }
                // },
                Background: {},
                ContentData: {
                    Thumbnail: {},
                    Title: {},
                    Description: {},
                    Genre: {},
                    Info: {},
                },
                ContentActions: {
                    // BackButton: { type: BackButton },
                    // PlayButton: { type: Button },
                    // PlayTrailer: { type: Button },

                }
            }
        };
    }

    override _inactive(): void {
        console.log("Inactive");
        this.index = 1;
    }

    override set params(args: any) {
        const { id, from } = args;
        this.from = from;
        axios.get(`https://api-qa.enlight.diagnal.com/v1b3/content/${id}`).then((res) => {
            console.log(res.data);
            this.contentId = id;
            this.patch({
                ContentView: {
                    Spinner: {
                        rect: false,
                    },
                    shader: { type: Lightning.shaders.RadialGradient, x: 300, y: 300, innerColor: 0xff000000, radius: 1500 },
                    Background: {
                        h: (h: number) => h,
                        w: (w: number) => w,
                        src: res.data.images.find((img: Image) => img.width === 2048)?.url,

                    },
                    ContentData: {
                        zIndex: 2,
                        Thumbnail: {
                            x: 1400, y: 324,
                            w: 288, h: 432,
                            scale: 1.5,
                            shader: { type: Lightning.shaders.RoundedRectangle, radius: 30 },
                            src: res.data.images.find((img: Image) => img.width === 288)?.url,
                            color: theme.colors.white,
                        },
                        Title: {
                            x: 40, y: 185,
                            shader: null,
                            text: {
                                text: res.data.title,
                                fontSize: 80
                            },
                            color: theme.colors.white,
                        },
                        Description: {
                            x: 40, y: 290,
                            w: 900,
                            shader: null,
                            text: {
                                wordWrap: true,
                                maxLines: 3,
                                text: res.data.description,
                                maxLinesSuffix: '...',
                                fontSize: 30
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        Genre: {
                            x: 40, y: 400,
                            w: 900,
                            shader: null,
                            text: {
                                text: res.data.genre.join(' . '),
                                fontSize: 24
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        Info: {
                            Director: {
                                x: 40, y: 460,
                                w: 100,
                                shader: null,
                                text: {
                                    text: 'Director : ',
                                    fontSize: 24
                                },
                                color: theme.colors.accentGrey.light,
                            },
                            Starring: {
                                x: 40, y: 490,
                                w: 100,
                                shader: null,
                                text: {
                                    text: 'Staring  : ',
                                    fontSize: 24,
                                },
                                color: theme.colors.accentGrey.light,
                            },
                            DirectorList: {
                                x: 150, y: 460,
                                w: 800,
                                shader: null,
                                text: {
                                    text: res.data.director.map((a: any) => a.personName).join(', '),
                                    fontSize: 24
                                },
                                color: theme.colors.accentGrey.light,
                            },
                            StarringList: {
                                x: 150, y: 490,
                                w: 800,
                                shader: null,
                                text: {
                                    text: res.data.actor.map((a: any) => a.personName).join(', '),
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
                                x: 70, y: 160,
                                shader: null,
                                type: VideoSpecItem,
                                specData: '  16+  '
                            },
                            VideoSpec2: {
                                x: 135, y: 160,
                                shader: null,
                                type: VideoSpecItem,
                                specData: '  4k  '
                            },
                            VideoSpec3: {
                                x: 193, y: 160,
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
            })
            this._refocus();
        })
    }

    // override _enable(): void {
    //     this.index = 1;
    // }


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

export default ContentDetails;