import { BaseXML } from "../../BaseXML";
import { XMLJsonObject } from "~/utils/xml";
import { ColumnIdFactory } from "./ColumnIdFactory";

export interface SheetRow {
  /** 行号 */
  r: number;
  /** 对应数据在sharedStrings.xml中的位置 */
  cols: number[];
}

export class BaseSheetXML extends BaseXML {
  private dimension: XMLJsonObject;
  private sheetViews: XMLJsonObject;
  private sheetFormatPr: XMLJsonObject;
  private sheetData: XMLJsonObject;
  private pageMargins: XMLJsonObject;
  private pageSetup: XMLJsonObject;

  private rows: XMLJsonObject[];
  // private colIdFactory: ColumnIdFactory;

  public sheet_name: string;

  constructor(sheet_name: string, id: number) {
    const json: XMLJsonObject = {
      tagName: "worksheet",
      namespace: {
        default: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        // xdr: 'http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing',
        // x14: 'http://schemas.microsoft.com/office/spreadsheetml/2009/9/main',
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        // etc: 'http://www.wps.cn/officeDocument/2017/etCustomData'
        // x14ac: 'http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac'
      },
      attrs: {
        "mc:Ignorable": "x14ac",
        "xmlns:x14ac": "http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac",
      },
    };
    super(`sheet${id}` + ".xml", json);
    this.sheet_name = sheet_name;
    this.dimension = {
      tagName: "dimension",
      attrs: {
        ref: "A1:A1",
      },
    };

    this.sheetViews = {
      tagName: "sheetViews",
      children: [
        {
          tagName: "sheetView",
          attrs: {
            workbookViewId: "0",
          },
          children: [
            {
              tagName: "selection",
              attrs: {
                activeCell: "A1",
                sqref: "A1",
              },
            },
          ],
        },
      ],
    };

    this.sheetFormatPr = {
      tagName: "sheetFormatPr",
      attrs: {
        defaultRowHeight: "13.8",
        "x14ac:dyDescent": "0.25",
      },
    };
    this.rows = [];
    this.sheetData = {
      tagName: "sheetData",
      children: this.rows,
    };

    // this.phoneticPr = {
    //   tagName: 'phoneticPr',
    //   attrs: {
    //     fontId: '1',
    //     type: 'noConversion'
    //   }
    // }
    this.pageMargins = {
      tagName: "pageMargins",
      attrs: {
        left: "0.7",
        right: "0.7",
        top: "0.75",
        bottom: "0.75",
        header: "0.3",
        footer: "0.3",
      },
    };
    this.pageSetup = {
      tagName: "pageSetup",
      attrs: {
        paperSize: "9",
        orientation: "portrait",
      },
    };

    json.children = [
      // {
      //   tagName: 'sheetPr'
      // },
      this.dimension,
      this.sheetViews,
      this.sheetFormatPr,
      this.sheetData,
      // this.phoneticPr,
      this.pageMargins,
      this.pageSetup,
      // {
      //   tagName: 'headerFooter'
      // }
    ];

    // this.colIdFactory = new ColumnIdFactory();
  }

  public push(row: SheetRow) {
    const colIdFactory = new ColumnIdFactory();
    this.rows.push({
      tagName: "row",
      attrs: {
        r: row.r + 1 + "",
        spans: `1:${row.cols.length}`,
        "x14ac:dyDescent": "0.25",
      },
      children: row.cols.map((col) => {
        return {
          tagName: "c",
          attrs: {
            r: `${colIdFactory.next()}${row.r + 1}`,
            t: "s",
            // s: (index + 1) + ''
          },
          children: [
            {
              tagName: "v",
              children: [col + ""],
            },
          ],
        };
      }),
    });
  }

  async compile() {}
}
