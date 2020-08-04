import { BaseFolder } from "./BaseFolder";
import { ZipFiles, Zip } from "@dangao/node-excel/utils/zip";
import { ROOTRelsFolder } from "./_rels";
import { DocPropsFolder } from "./docProps";
import { XLFolder } from "./xl";
import { ContentTypesXML } from "./[Content_Types].xml";
import { ExcelSheet, ExcelRow } from "..";
import { BaseSheetXML, SheetRow } from "./xl/worksheets/sheet.xml";

export class BaseExcelFolder extends BaseFolder {

  public files: ZipFiles;
  public sheets: Record<string, ExcelSheet>;
  public xl: XLFolder;
  public contentTypes: ContentTypesXML;
  constructor() {
    const files: ZipFiles = [];
    super('root', files);
    this.files = files;
    const rels = new ROOTRelsFolder();
    const docProps = new DocPropsFolder();
    const xl = new XLFolder();
    const contentTypes = new ContentTypesXML();
    this.files.push(rels, docProps, xl, contentTypes);
    this.sheets = {};
    this.xl = xl;
    this.contentTypes = contentTypes;
  }

  public addSheet(name: string, rows: ExcelRow[] = []) {
    const { sheets } = this;

    if (sheets[name]) {
      throw `This sheet name is repect!`;
    }

    this.sheets[name] = {
      name,
      rows,
    }

    this.contentTypes.sheets

    return this.sheets[name];
  }

  /** 返回修改后的长度 */
  public addRow(sheetName: string, row: ExcelRow) {
    const sheets = this.sheets;
    let len = 1;
    if (!sheets[sheetName]) {
      this.addSheet(sheetName, [row])
    }
    else {
      len = sheets[sheetName].rows.push(row)
    }

    return len;
  }

  public async package() {
    Object.keys(this.sheets).forEach((k, index) => {
      const sheet = this.sheets[k];
      const sheetXml = new BaseSheetXML(sheet.name, index + 1);

      /** 归纳数据到sharedStrings */
      sheet.rows.forEach((row, rowIndex) => {
        const rowObj: SheetRow = {
          r: rowIndex,
          cols: []
        };
        row.forEach(col => {
          const colIndex = this.xl.sharedStrings.push(col.value) - 1;
          rowObj.cols.push(colIndex);
        })
        sheetXml.push(rowObj)
      })

      this.xl.sheetsFolder.add(sheetXml);
    })

    await this.compile();
    return new Zip(this.files)
  }

  async compile() {
    this.contentTypes.sheets = this.xl.sheetsFolder.files;
    await this.contentTypes.compile();
    await this.xl.compile();
  }
}