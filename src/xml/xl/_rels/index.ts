import { BaseFolder } from "../../BaseFolder";
import { ZipFiles } from "~/utils/zip";
import { WorkBookRelsXML } from "./workbook.xml";
import { BaseSheetXML } from "../worksheets/sheet.xml";

export class XLRelsFolder extends BaseFolder {

  public rels: WorkBookRelsXML;

  constructor(sheets: BaseSheetXML[]) {
    const files: ZipFiles = [];
    super('_rels', files);
    this.rels = new WorkBookRelsXML(sheets);
    files.push(this.rels);
  }

  public compile() {
    return this.rels.compile();
  }
}