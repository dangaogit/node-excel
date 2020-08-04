import { BaseFolder } from "../BaseFolder";
import { ZipFiles } from "@dangao/node-excel/utils/zip";
import { ROOTRelsXML } from "./rels.xml";

export class ROOTRelsFolder extends BaseFolder {

  constructor() {
    const files: ZipFiles = [
      new ROOTRelsXML()
    ];
    super('_rels', files);
  }

  async compile() {}
}