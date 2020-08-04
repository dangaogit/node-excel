import { BaseXML } from "../../BaseXML";
import { XMLJsonObject } from "@dangao/node-excel/utils/xml";
import { BaseSheetXML } from "../worksheets/sheet.xml";

export class WorkBookRelsXML extends BaseXML {

  private sheets: BaseSheetXML[];
  private children: XMLJsonObject[];
  private getShip(props: { id: string, type: string, target: string }): XMLJsonObject {
    return {
      tagName: 'Relationship',
      attrs: {
        Id: props.id,
        Type: props.type,
        Target: props.target

      }
    }
  }

  constructor(sheets: BaseSheetXML[]) {
    const json: XMLJsonObject = {
      tagName: 'Relationships',
      namespace: {
        default: 'http://schemas.openxmlformats.org/package/2006/relationships'
      }
    };
    super('workbook.xml.rels', json);
    this.sheets = sheets;
    json.children = this.children = [];
  }

  private getSheetShip(sheet: BaseSheetXML, index: number) {
    return this.getShip({ id: 'rId' + (index + 1), type: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet', target: `worksheets/${sheet.name}` });
  }

  /** 打包前必须调 */
  public async compile() {
    const children = this.children;
    const len = this.sheets.length;
    // alert(len)
    this.sheets.forEach((sheet, index) => {
      children.push(this.getSheetShip(sheet, index))
    })
    children.push(this.getShip({
      id: 'rId' + (len + 1),
      type: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme',
      target: 'theme/theme1.xml'
    }))
    children.push(this.getShip({
      id: 'rId' + (len + 2),
      type: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings',
      target: 'sharedStrings.xml'
    }))
    
  }
}