import { BaseFolder } from "../../BaseFolder";
import { BaseSheetXML } from "./sheet.xml";

export class WorkSheetsFolder extends BaseFolder {

  public files: BaseSheetXML[];
  constructor() {
    const files: BaseSheetXML[] = [];
    super('worksheets', files);
    this.files = files;
  }

  public add(tab: BaseSheetXML) {
    this.files.push(tab);
  }

  async compile() {}

}