import { BaseXML } from "../BaseXML";
import { XMLJsonObject } from "~/utils/xml";

export class SharedStringsXML extends BaseXML {
  public json: XMLJsonObject;
  private children: XMLJsonObject[];
  constructor() {
    const json: XMLJsonObject = {
      tagName: 'sst',
      attrs: {
        count: '0',
        uniqueCount: '0'
      },
      namespace: {
        default: 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
      },
    };
    super('sharedStrings.xml', json);
    this.json = json;
    json.children = this.children = [];
  }

  public push(value: string) {
    return this.children.push({
      tagName: 'si',
      children: [
        {
          tagName: 't',
          children: [value]
        },
        // {
        //   tagName: 'phoneticPr',
        //   attrs: {
        //     fontId: '1',
        //     type: 'noConversion'
        //   }
        // }
      ]
    })
  }

  get length() {
    return this.children.length;
  }

  async compile() { }
}