import { BaseXML } from "../BaseXML";
import { XMLJsonObject } from "@dangao/node-excel/utils/xml";

export class CoreXML extends BaseXML {

  constructor() {
    const json: XMLJsonObject = {
      tagName: 'coreProperties',
      extendNS: 'cp',
      namespace: {
        cp: 'http://schemas.openxmlformats.org/package/2006/metadata/core-properties',
        dc: 'http://purl.org/dc/elements/1.1/',
        dcterms: 'http://purl.org/dc/terms/',
        dcmitype: 'http://purl.org/dc/dcmitype/',
        xsi: 'http://www.w3.org/2001/XMLSchema-instance'
      }
    }
    super('core.xml', json)
  }

  async compile() {}
}