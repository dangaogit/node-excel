import { BaseXML } from "../../BaseXML";
import { XMLJsonObject } from "~/utils/xml";

// const SrgbClrs = [
//   '5B9BD5',
//   'ED7D31',
//   'A5A5A5',
//   'FFC000',
//   '4472C4',
//   '70AD47',
// ]

// const Fonts = [
//   { script: 'Jpan', typeface: 'Yu Gothic Light' },
//   { script: 'Hang', typeface: '맑은 고딕' },
//   { script: 'Hans', typeface: '等线 Light' },
//   { script: 'Hant', typeface: '新細明體' },
//   { script: 'Arab', typeface: 'Times New Roman' },
//   { script: 'Hebr', typeface: 'Times New Roman' },
//   { script: 'Thai', typeface: 'Tahoma' },
//   { script: 'Ethi', typeface: 'Nyala' },
//   { script: 'Beng', typeface: 'Vrinda' },
//   { script: 'Gujr', typeface: 'Shruti' },
//   { script: 'Khmr', typeface: 'MoolBoran' },
//   { script: 'Knda', typeface: 'Tunga' },
//   { script: 'Guru', typeface: 'Raavi' },
//   { script: 'Cans', typeface: 'Euphemia' },
//   { script: 'Cher', typeface: 'Plantagenet Cherokee' },
//   { script: 'Yiii', typeface: 'Microsoft Yi Baiti' },
//   { script: 'Tibt', typeface: 'Microsoft Himalaya' },
//   { script: 'Thaa', typeface: 'MV Boli' },
//   { script: 'Deva', typeface: 'Mangal' },
//   { script: 'Telu', typeface: 'Gautami' },
//   { script: 'Taml', typeface: 'Latha' },
//   { script: 'Syrc', typeface: 'Estrangelo Edessa' },
//   { script: 'Orya', typeface: 'Kalinga' },
//   { script: 'Mlym', typeface: 'Kartika' },
//   { script: 'Laoo', typeface: 'DokChampa' },
//   { script: 'Sinh', typeface: 'Iskoola Pota' },
//   { script: 'Mong', typeface: 'Mongolian Baiti' },
//   { script: 'Viet', typeface: 'Microsoft Uighur' },
//   { script: 'Uigh', typeface: 'Times New Roman' },
//   { script: 'Geor', typeface: 'Sylfaen' },
// ]

const theme1 = `<a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="1F497D"/></a:dk2><a:lt2><a:srgbClr val="EEECE1"/></a:lt2><a:accent1><a:srgbClr val="4F81BD"/></a:accent1><a:accent2><a:srgbClr val="C0504D"/></a:accent2><a:accent3><a:srgbClr val="9BBB59"/></a:accent3><a:accent4><a:srgbClr val="8064A2"/></a:accent4><a:accent5><a:srgbClr val="4BACC6"/></a:accent5><a:accent6><a:srgbClr val="F79646"/></a:accent6><a:hlink><a:srgbClr val="0000FF"/></a:hlink><a:folHlink><a:srgbClr val="800080"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Cambria"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="宋体"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="宋体"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000" scaled="1"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:shade val="51000"/><a:satMod val="130000"/></a:schemeClr></a:gs><a:gs pos="80000"><a:schemeClr val="phClr"><a:shade val="93000"/><a:satMod val="130000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="94000"/><a:satMod val="135000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst><a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d><a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/>`;

/** 主题文件，一般不会修改就够用了 */
export class Theme1XML extends BaseXML {

  constructor() {
    const json: XMLJsonObject = {
      tagName: 'theme',
      extendNS: 'a',
      attrs: {
        name: 'Office Theme'
      },
      namespace: {
        a: 'http://schemas.openxmlformats.org/drawingml/2006/main'
      },
      children: [
        theme1
      ]
    };

    super('theme1.xml', json);

    // json.children = [
    //   {
    //     tagName: 'themeElements',
    //     extendNS: 'a',
    //     children: [
    //       {
    //         tagName: 'clrScheme',
    //         extendNS: 'a',
    //         attrs: {
    //           name: 'Office'
    //         },
    //         children: [
    //           {
    //             tagName: 'dk1',
    //             extendNS: 'a',
    //             children: ['<a:sysClr val="windowText" lastClr="000000"/>']
    //           },
    //           {
    //             tagName: 'lt1',
    //             extendNS: 'a',
    //             children: ['<a:sysClr val="window" lastClr="FFFFFF"/>']
    //           },
    //           {
    //             tagName: 'dk2',
    //             extendNS: 'a',
    //             children: ['<a:srgbClr val="44546A"/>']
    //           },
    //           {
    //             tagName: 'lt2',
    //             extendNS: 'a',
    //             children: ['<a:srgbClr val="E7E6E6"/>']
    //           },
    //           ...SrgbClrs.map((color, index) => this.getAccent(index + 1, color)),
    //           {
    //             tagName: 'hlink',
    //             extendNS: 'a',
    //             children: ['<a:srgbClr val="0563C1"/>']
    //           },
    //           {
    //             tagName: 'folHlink',
    //             extendNS: 'a',
    //             children: ['<a:srgbClr val="954F72"/>']
    //           }
    //         ]
    //       },
    //       this.getFontSheme(),
    //       {
    //         tagName: 'fmtScheme',
    //         extendNS: 'a',
    //         attrs: {
    //           name: 'Office'
    //         },
    //         children: ['<a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst>']
    //       }
    //     ]
    //   },
    //   {
    //     tagName: 'objectDefaults',
    //     extendNS: 'a'
    //   }
    // ]
  }

  // private getFontSheme(): XMLJsonObject {
  //   const fonts: XMLJsonObject[] = [
  //     {
  //       tagName: 'ea',
  //       extendNS: 'a',
  //       attrs: {
  //         typeface: ''
  //       }
  //     },
  //     {
  //       tagName: 'cs',
  //       extendNS: 'a',
  //       attrs: {
  //         typeface: ''
  //       }
  //     },
  //     ...Fonts.map(font => ({
  //       tagName: 'font',
  //       extendNS: 'a',
  //       attrs: font
  //     }))
  //   ];
  //   return {
  //     tagName: 'fontScheme',
  //     attrs: {
  //       name: 'Office'
  //     },
  //     extendNS: 'a',
  //     children: [
  //       {
  //         extendNS: 'a',
  //         tagName: 'majorFont',
  //         children: [
  //           {
  //             tagName: 'latin',
  //             extendNS: 'a',
  //             attrs: {
  //               typeface: 'Calibri Light'
  //             }
  //           },
  //           ...fonts
  //         ]
  //       },
  //       {
  //         extendNS: 'a',
  //         tagName: 'minorFont',
  //         children: [
  //           {
  //             tagName: 'latin',
  //             extendNS: 'a',
  //             attrs: {
  //               typeface: 'Calibri'
  //             }
  //           },
  //           ...fonts
  //         ]
  //       }
  //     ]
  //   }
  // }

  // private getAccent(id: string | number, value: string): XMLJsonObject {
  //   return {
  //     tagName: 'accent' + id,
  //     extendNS: 'a',
  //     children: [
  //       {
  //         tagName: 'srgbClr',
  //         extendNS: 'a',
  //         attrs: {
  //           val: value
  //         }
  //       }
  //     ]
  //   }
  // }

  async compile() { }
}