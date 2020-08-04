import { ZipFile } from "~/utils/zip";
import { XMLJson, XMLJsonObject } from "~/utils/xml";
import { BasePackage } from "./BasePackage";

export abstract class BaseXML implements ZipFile<XMLJson>, BasePackage {
  public type: 'file' = 'file';
  public name: string;
  public data: XMLJson;

  constructor(name: string, xmljson: XMLJsonObject) {
    this.name = name;
    this.data = new XMLJson(xmljson);
  }
  
  abstract compile(): Promise<any>;
}