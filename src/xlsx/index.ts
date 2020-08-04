import { ExcelSheet, ExcelOptions, ExcelRow } from "..";
import { BaseExcelFolder } from "../xml";

export class ExcelXlsx {
  private excelXml = new BaseExcelFolder();

  constructor(public sheets: ExcelSheet[], public options: ExcelOptions) {}

  public addSheet(name: string, rows?: ExcelRow[]) {
    return this.excelXml.addSheet(name, rows);
  }

  public addRow(sheetName: string, row: ExcelRow) {
    return this.excelXml.addRow(sheetName, row);
  }

  public async getZip() {
    const zip = await this.excelXml.package();
    return zip.execu();
  }
}
