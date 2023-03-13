import { Lightning } from "@lightningjs/sdk";
import { SearchTemplateSpec } from "../../models/template-specs";
import NavProfileItem from '../../components/atoms/nav-Profile-item/NavProfileItem';

class Search
    extends Lightning.Component<SearchTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<SearchTemplateSpec>
{

    static override _template(): Lightning.Component.Template<SearchTemplateSpec> {
        return {
            Search: {
                mount: 0.5,
                SearchComponent: {
                    SearchBox: {
                        h: 300, w: 200,
                        type: NavProfileItem
                    }
                }
            }
        };
    }

}

export default Search;