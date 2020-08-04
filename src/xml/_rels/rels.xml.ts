import { XMLJsonObject } from "@dangao/node-excel/utils/xml";
import { BaseXML } from "../BaseXML";

export class ROOTRelsXML extends BaseXML {
  constructor() {
    const json: XMLJsonObject = {
      tagName: 'Relationships',
      namespace: {
        default: 'http://schemas.openxmlformats.org/package/2006/relationships'
      },
      children: [
        '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>',
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>',
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>'
      ]
    }
    super('.rels', json);
  }

  async compile() {}
}