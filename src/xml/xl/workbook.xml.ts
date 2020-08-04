import { BaseXML } from "../BaseXML";
import { XMLJsonObject } from "~/utils/xml";
import { BaseSheetXML } from "./worksheets/sheet.xml";


export class WorkBookXML extends BaseXML {

  private sheets: XMLJsonObject[];

  constructor() {
    const json: XMLJsonObject = {
      tagName: 'workbook',
      attrs: {
        // 'mc:Ignorable': 'x15',
        // 'xmlns:x15': 'http://schemas.microsoft.com/office/spreadsheetml/2010/11/main'
      },
      namespace: {
        default: 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
        r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
        // mc: 'http://schemas.openxmlformats.org/markup-compatibility/2006',
      },
      children: []
    };
    super('workbook.xml', json);

    const children: XMLJsonObject[] = json.children = [];
    children.push({
      tagName: 'fileVersion',
      attrs: {
        appName: 'xl',
        lastEdited: '7',
        lowestEdited: '6',
        rupBuild: '18431'
      }
    })
    children.push({
      tagName: 'workbookPr',
      // attrs: {
      //   filterPrivacy: '1',
      //   defaultThemeVersion: '166925'
      // }
    })
    children.push({
      tagName: 'bookViews',
      children: [`<workbookView windowWidth="22260" windowHeight="12648"/>`]
    })
    this.sheets = [];
    children.push({
      tagName: 'sheets',
      children: this.sheets
    });
    children.push({
      tagName: 'calcPr',
      attrs: {
        calcId: '162913'
      }
    })
    // children.push({
    //   tagName: 'extLst',
    //   children: [`<ext uri="{140A7094-0E35-4892-8432-C4D2E57EDEB5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><x15:workbookPr chartTrackingRefBase="1"/></ext>`]
    // })
  }

  public pullSheets(sheets: BaseSheetXML[]) {
    sheets.map((sheet, index) => {
      this.sheets.push({
        tagName: 'sheet',
        attrs: {
          name: sheet.sheet_name,
          sheetId: (index + 1) + '',
          'r:id': `rId${index + 1}`
        }
      });
    })
  }

  async compile() { }
}