import { ZipFolder, ZipFiles } from "@dangao/node-excel/utils/zip";
import { BasePackage } from "./BasePackage";

export abstract class BaseFolder implements ZipFolder, BasePackage {
  public name: string;
  public data: ZipFiles<any>;
  public type: 'folder' = 'folder';
  constructor(name: string, files: ZipFiles<any>) {
    this.name = name;
    this.data = files;
  }

  /** 打包前执行 */
  abstract compile(): Promise<any>;
}