import { Lightning } from '@lightningjs/sdk';
import { BackButton, Button, VideoSpecItem } from '../../../components';
import { Content } from '../../api-request-response';
interface PreviewComponentTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties of the component
     */
    firstActive: boolean;

    /**
     * children of the component
     */
    ContentView: {
        Thumbnail: object,
        ContentDetails: {
            ContentData: {
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
        }

    }

}

export default PreviewComponentTemplateSpec;