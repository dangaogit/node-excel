import { BaseFolder } from "../BaseFolder";
import { ZipFiles } from "@dangao/node-excel/utils/zip";
import { XLRelsFolder } from "./_rels";
import { ThemeFolder } from "./theme";
import { WorkSheetsFolder } from "./worksheets";
import { SharedStringsXML } from "./sharedStrings.xml";
import { WorkBookXML } from "./workbook.xml";

export class XLFolder extends BaseFolder {

  public sheetsFolder: WorkSheetsFolder;
  public sharedStrings: SharedStringsXML;
  public workbook: WorkBookXML;
  private xl_rels: XLRelsFolder;
  constructor() {
    const files: ZipFiles = [];
    super('xl', files);
    const themes = new ThemeFolder(), sheets = new WorkSheetsFolder(), xl_rels = new XLRelsFolder(sheets.files), sharedStrings = new SharedStringsXML(), workbook = new WorkBookXML();
    files.push(xl_rels, themes, sheets, sharedStrings, workbook);
    this.sheetsFolder = sheets;
    this.sharedStrings = sharedStrings;
    this.workbook = workbook;
    this.xl_rels = xl_rels;
  }

  async compile() {
    this.workbook.pullSheets(this.sheetsFolder.files);
    await this.xl_rels.compile();
  }
}