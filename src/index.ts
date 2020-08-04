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

export interface ExcelOutOptions {
  filename: string;
}

export interface ExcelOptions {
  out: ExcelOutOptions;
}

export class Excel {

  constructor(public sheets: ExcelSheet[], public options: Partial<ExcelOptions>) { }

  getOptions(): ExcelOptions {
    if (!this.options.out) {
      this.options.out = {
        filename: new Date().getTime() + '.dg.xlsx'
      }
    }
    return this.options as ExcelOptions;
  }

  toXlsx() {
    return new ExcelXlsx(this.sheets, this.getOptions());
  }
}