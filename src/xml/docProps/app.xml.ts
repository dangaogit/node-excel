import { BaseXML } from "../BaseXML";
import { XMLJsonObject } from "~/utils/xml";

export class AppXML extends BaseXML {

  constructor() {
    const json: XMLJsonObject = {
      tagName: 'Properties',
      namespace: {
        default: 'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties',
        vt: 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes'
      }
    };
    super('app.xml', json);
  }

  async compile() {}
}