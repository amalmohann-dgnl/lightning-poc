import { Lightning } from "@lightningjs/sdk";

interface FocusBoxTemplateSpec extends Lightning.Component.TemplateSpec {
  Box: {
    InnerBox: object;
  }
}

export default FocusBoxTemplateSpec;
