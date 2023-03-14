import { Lightning } from '@lightningjs/sdk';
import { BackButton } from '../../../components';
import { Content } from '../../api-request-response';
interface ContentDetailsTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties of the component
     */
    index: number;
    contentData: Content;


    /**
     * children of the component
     */
    ContentView: {
        Spinner: object;
        Background: object;
        ContentData: any;
        ContentActions: {
            BackButton: typeof BackButton
        };
    }

}

export default ContentDetailsTemplateSpec;