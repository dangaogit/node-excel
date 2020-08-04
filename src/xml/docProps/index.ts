import { BaseFolder } from "../BaseFolder";
import { ZipFiles } from "~/utils/zip";
import { AppXML } from "./app.xml";
import { CoreXML } from "./core.xml";

export class DocPropsFolder extends BaseFolder {

  constructor() {
    const files: ZipFiles = [
      new AppXML(),
      new CoreXML()
    ];
    super('docProps', files);
  }

  async compile() {}
}