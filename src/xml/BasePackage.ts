
export abstract class BasePackage {

  abstract compile<T>(): Promise<T>;
}