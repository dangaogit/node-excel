import { XMLJsonObject } from "@dangao/node-excel/utils/xml";
import { BaseXML } from "./BaseXML";
import { BaseSheetXML } from "./xl/worksheets/sheet.xml";

export class ContentTypesXML extends BaseXML {

  private children: string[];
  public sheets: BaseSheetXML[];
  constructor() {
    const json: XMLJsonObject = {
      tagName: 'Types',
      namespace: {
        default: 'http://schemas.openxmlformats.org/package/2006/content-types'
      },
    }
    super('[Content_Types].xml', json);
    this.sheets = [];

    json.children = this.children = [];

    this.children.push('<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>')
    this.children.push('<Default Extension="xml" ContentType="application/xml"/>')
    this.children.push('<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>')
    this.children.push('<Override PartName="/xl/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>')
    this.children.push('<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>')
    this.children.push('<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>')
    this.children.push('<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>')
  }

  /** 打包前必须调用 */
  public async compile() {
    this.sheets.forEach(sheet => {
      this.children.push(`<Override PartName="/xl/worksheets/${sheet.name}" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`)
    })
  }
}