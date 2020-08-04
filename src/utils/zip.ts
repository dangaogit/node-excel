import JSZip from 'jszip';

type TypeExtendToString = { toString(): string; } & object;
type ZipFileDataType = string | Blob | ArrayBuffer | Uint8Array | number[] | TypeExtendToString;
export interface ZipFile<T extends ZipFileDataType = any> {
  type: "file",
  name: string;
  data: T,
  options?: JSZip.JSZipFileOptions
}

export interface ZipFolder<T = any> {
  type: "folder",
  name: string;
  data: ZipFiles<T>,
  options?: JSZip.JSZipFileOptions
}

export type ZipFiles<T = any> = Array<ZipFile<T> | ZipFolder>;

export class Zip {

  constructor(public files: ZipFiles<any>) {
  }

  async execu() {
    const _zip = new JSZip();
    const addFile = (zip: JSZip, file: ZipFile<any> | ZipFolder) => {
      if (file.type === "folder") {
        const next = zip.folder(file.name);
        file.data.forEach(file => addFile(next!, file))
      }
      else {
        if (typeof file.data === 'string' ||
          file.data instanceof Blob ||
          file.data instanceof ArrayBuffer ||
          file.data instanceof Uint8Array ||
          file.data instanceof Array) {
          zip.file(file.name, file.data, file.options);
        }
        else {
          zip.file(file.name, file.data + '', file.options);
        }
      }
    }

    this.files.forEach(file => {
      addFile(_zip, file);
    })

    return _zip.generateAsync({ type: "nodebuffer" });
  }
}