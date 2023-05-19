import { Lightning } from '@lightningjs/sdk';
import { BackButton, Button, VideoSpecItem } from '../../../components';
import { Content } from '../../api-request-response';
import { JavaScriptInterface } from '../../JavaScriptInterface';
interface ContentDetailsTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties of the component
     */
    index: number;
    contentData: Content;
    contentId: string;
    LngAndroid: JavaScriptInterface;



    /**
     * children of the component
     */
    ContentView: {
        Thumbnail: object;
        Background: object;
        ContentData: {
            Thumbnail: object,
            Title: object,
            Description: object,
            Genre: object,
            Info: {
                Director: object
                Starring: object
                DirectorList: object
                StarringList: object
            },
            VideoSpec: {
                VideoSpec1: typeof VideoSpecItem;
                VideoSpec2: typeof VideoSpecItem;
                VideoSpec3: typeof VideoSpecItem;
            }
        };
        ContentActions: {
            BackButton: typeof BackButton;
            PlayButton: typeof Button;
            PlayTrailer: typeof Button;
        };
    }

}

export default ContentDetailsTemplateSpec;