import "./env";
import { ExcelXlsx } from "./xlsx";

export interface ExcelCell {
  value: any;
  style?: {};
}
export type ExcelRow = ExcelCell[];

export interface ExcelSheet {
  name: string;
  rows: ExcelRow[];
}


export interface ExcelOptions {

}

export class Excel {

  constructor(public sheets: ExcelSheet[] = [], public options: Partial<ExcelOptions> = {}) { }


  toXlsx() {
    return new ExcelXlsx(this.sheets, {});
  }
}