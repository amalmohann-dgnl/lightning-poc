import { Lightning, Router } from "@lightningjs/sdk";
import { Button, Input } from "@lightningjs/ui-components";
import { ContentDetailsTemplateSpec, SearchTemplateSpec } from "../../models/template-specs";
import theme from '../../configs/theme';
import { BackButton } from "../../components";
import axios from 'axios';
import { Content, Image } from "../../models/api-request-response";

class ContentDetails
    extends Lightning.Component<ContentDetailsTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<ContentDetailsTemplateSpec>
{
    contentData!: Content;
    index: number = 0;

    static override _template(): Lightning.Component.Template<ContentDetailsTemplateSpec> {
        return {
            ContentView: {
                w: 1920, h: 1080,
                color: theme.colors.primaryLight,
                rect: true,
                shader: { x: 100, y: -100, pivot: 0.5, type: Lightning.shaders.RadialGradient, outerColor: theme.colors.primaryLight, innerColor: theme.colors.dark, radius: 800 },
                Spinner: {
                    w: 100, h: 100, mount: 0.5,
                    x: (x: number) => x / 2,
                    y: (y: number) => y / 2,
                    rect: true,
                    shader: { type: Lightning.shaders.Spinner2, stroke: 5 }
                },
                Background: {},
                ContentData: {
                    Thumbnail: {},
                    Title: {},
                    Description: {},
                    Genre: {},
                    Cast: {},
                },
                ContentActions: {}
            }
        };
    }

    override set params(args: any) {
        const { id } = args;
        axios.get(`https://api-qa.enlight.diagnal.com/v1b3/content/${id}`).then((res) => {
            console.log(res.data);
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
                            shader: { type: Lightning.shaders.RoundedRectangle, radius: 30 },
                            src: res.data.images.find((img: Image) => img.width === 288)?.url,
                            x: 1400, y: 324,
                            w: 288, h: 432,
                            scale: 1.5,
                            color: theme.colors.white,
                        },
                        Title: {
                            x: 40, y: 170,
                            shader: null,
                            text: {
                                text: res.data.title,
                                fontSize: 80
                            },
                            color: theme.colors.white,
                        },
                        Description: {
                            x: 40, y: 280,
                            w: 900,
                            shader: null,
                            text: {
                                text: res.data.description,
                                fontSize: 30
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        Genre: {
                            x: 40, y: 400,
                            w: 900,
                            shader: null,
                            text: {
                                text: 'Genre: ' + res.data.genre.join(', '),
                                fontSize: 24
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        Cast: {
                            x: 40, y: 400,
                            w: 900,
                            shader: null,
                            text: {
                                text: 'Genre: ' + res.data.genre.join(', '),
                                fontSize: 24
                            },
                            color: theme.colors.accentGrey.light,
                        }

                    },
                    ContentActions: {
                        BackButton: {
                            x: 40, y: 40,
                            shader: null,
                            type: BackButton
                        },
                    }

                }
            })
        })
    }




    // overrides the default left button actions
    override _handleLeft() {
        if (this.index > 0) {
            this.index -= 1;
        }
    }

    // overrides the default right button actions
    override _handleRight() {
        if (this.index < 2) {
            this.index += 1;
        }
    }

    // overrides the default behavior when enter button is clicked
    override _handleEnter() {
        if (this.index === 0) {
            Router.navigate('home');
        }
    }

    // returns the focused components
    override _getFocused(): any {
        return this.tag('ContentView.ContentActions' as any).children[this.index]
    }


}

export default ContentDetails;