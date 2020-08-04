import { parseStringPromise } from "xml2js";

export function stringToXML(str: string) {
  return parseStringPromise(str);
}

const XML_HEAD = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`;

export function XMLToString(xml: any, not_head = false) {
  const result = xml;
  return `${not_head ? "" : XML_HEAD}\n${result}`;
}

export type XMLJsonObject = {
  attrs?: Record<string, string>;
  children?: string[] | XMLJsonObject[];
  tagName: string;
  /** 继承至某命名空间 XML写法类似于：<xxx:abc/> */
  extendNS?: string;
  /** 定义命名空间, 默认命名空间使用default */
  namespace?: Record<string, string> & { default?: string };
};

export interface XMLJsonOptions {
  compress: boolean;
  tabSize: number;
  lineFeedChar: "\r\n" | "\r";
}

export class XMLJson {
  private xmlstr = "";
  private options: XMLJsonOptions = {
    compress: true,
    tabSize: 2,
    lineFeedChar: "\r\n",
  };

  constructor(public json: XMLJsonObject, options: Partial<XMLJsonOptions> = {}) {
    Object.keys(options).forEach((k) => {
      (this.options as any)[k] = (options as any)[k];
    });
  }

  private childrenTypeIsString(par: string[] | XMLJsonObject[]): par is string[] {
    return par.length ? typeof par[0] === "string" : true;
  }

  getTab() {
    return "".padStart(this.options.tabSize, " ");
  }

  private analysisToString(el: XMLJsonObject, tab: string) {
    const { compress, lineFeedChar } = this.options;
    const endChar = compress ? "" : lineFeedChar;
    const startChar = tab + (compress ? "" : this.getTab());
    let result = "<",
      tagName = el.tagName;
    if (el.extendNS) {
      tagName = el.extendNS + ":" + tagName;
    }

    result += tagName;

    if (el.namespace) {
      const namespace = el.namespace;
      result += Object.keys(namespace)
        .map((k) => {
          return ` xmlns${k === "default" ? "" : `:${k}`}="${namespace[k]}"`;
        })
        .join("");
    }

    if (el.attrs) {
      const attrs = el.attrs;
      Object.keys(attrs).forEach((k) => {
        result += ` ${k}="${attrs[k]}"`;
      });
    }

    if (el.children && el.children.length) {
      result += ">" + endChar;

      if (el.children) {
        if (this.childrenTypeIsString(el.children)) {
          result += el.children
            .map((str) => {
              return startChar + str + endChar;
            })
            .join("");
        } else {
          result += el.children
            .map((el) => {
              return startChar + this.analysisToString(el, startChar) + endChar;
            })
            .join("");
        }
      }

      result += tab + `</${tagName}>`;

      return result;
    } else {
      result += "/>" + endChar;
      return result;
    }
  }

  toString() {
    this.xmlstr = this.analysisToString(this.json, "");
    const line = this.options.compress ? "" : this.options.lineFeedChar;
    return this.xmlstr ? XML_HEAD + line + this.xmlstr : "";
  }
}
