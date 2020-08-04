import "./env";
import { Excel, ExcelRow } from "@dangao/node-excel";

async function test() {
  const excel = new Excel().toXlsx();
  const headers: ExcelRow = [
    {
      value: "head1",
    },
    {
      value: "head2",
    },
  ];
  const cols: ExcelRow[] = [[{ value: "colA1" }, { value: "colB1" }]];
  const sheet = excel.addSheet("sheet1");

  sheet.rows = [headers, ...cols];

  const zipbuffer = excel.getZip();

  return zipbuffer;
}

test();