
// @ts-ignore
import { Grid, } from '@lightningjs/ui';
import { Lightning, Router, Storage } from '@lightningjs/sdk';
import GridLayoutTemplateSpec from '../../../models/template-specs/components/grid-template-spec';
import { endpoint, theme } from '../../../configs';
import BackButton from '../../atoms/back-button/BackButton';
import GridItem from '../../molecules/grid-item/GridItem';
import { Content } from '../../../models/api-request-response';
import { Image } from '../../../models/api-request-response/rail-data.response';
import AxiosRequester from '../../../services/AxiosRequester';

export default class GridLayout extends Lightning.Component<GridLayoutTemplateSpec> implements Lightning.Component.ImplementTemplateSpec<GridLayoutTemplateSpec> {

    index: number = 1;
    data: Content[] = [];
    dataLength: number = 0;
    intervalSub: number = 0;
    isLoading: boolean = true;


    static override _template(): Lightning.Component.Template<GridLayoutTemplateSpec> {
        return {
            w: 1920, h: 1080,
            color: theme.colors.primaryLight,
            rect: true,
            shader: { x: 100, y: -100, pivot: 0.5, type: Lightning.shaders.RadialGradient, outerColor: theme.colors.primaryLight, innerColor: theme.colors.dark, radius: 800 },
            BackButton: { x: 40, y: 40, shader: null, type: BackButton },
            Content: {
                Grid: { x: 110, y: 200, columns: 5, spacing: 160, crossSpacing: 50, itemType: GridItem, type: Grid },
            },
        }
    }

    override _init() {
        this.setLongRail();
    }

    async setLongRail() {
        this.isLoading = true;
        this.data = await Storage.get('longData');
        this.dataLength = this.data.length;
        const rail: { h: number; w: number; item: { label: string; src: string; data: Content }; }[] = [];
        for (let i = 0; i < this.dataLength; i++) {
            let label = this.data[i]?.title!;
            let img_src = this.data[i]?.images.find((img: Image) => img.width === 288)?.url
            rail.push({
                w: 288,
                h: 432,
                item: { label: label, src: img_src || "https://pmd205470tn-a.akamaihd.net/D2C_-_Content/191/249/oyPcsfGWL5Se6RGW1JCVgpHlASH_288x432_13635141800.jpg", data: this.data[i]! }
            });
        }
        this.tag('Grid' as any).add(rail.map((gridItem: any) => {
            return gridItem
        }));
        this.isLoading = false;
    }


    /**
     * 
     * Network intensive Testing
     * 
     */
    // override _active() {
    //     let axiosRequester: AxiosRequester = new AxiosRequester();
    //     this.intervalSub = setInterval(() => {
    //         for (let i = 0; i < 100; i++) {
    //             for (let index = 0; index < 10; index++) {
    //                 const timestamp = new Date().getTime();
    //                 axiosRequester.fetch(endpoint[index]! + `timestamp=${timestamp}`).then((response) => { });
    //             }
    //         }
    //     }, 1000);
    // }

    // override _inactive() {
    //     clearInterval(this.intervalSub);
    // }


    override _getFocused() {
        if (this.index === 0) {
            return this.tag('BackButton' as any);
        }
        return this.tag('Grid' as any);
    }

    override  _handleUp() {
        if (this.index > 0) {
            this.index -= 1;
        }
    }

    override  _handleDown() {
        if (this.index < 1) {
            this.index += 1;
        }
    }

    override _handleEnter() {
        if (this.index === 0) {
            Router.navigate('home');
        }
    }

}