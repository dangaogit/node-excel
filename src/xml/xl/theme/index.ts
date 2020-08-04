import { BaseFolder } from "../../BaseFolder";
import { ZipFiles } from "@dangao/node-excel/utils/zip";
import { Theme1XML } from "./theme1.xml";

export class ThemeFolder extends BaseFolder {
  constructor() {
    const files: ZipFiles = [
      new Theme1XML()
    ];
    super('theme', files);
  }

  async compile() {}
}