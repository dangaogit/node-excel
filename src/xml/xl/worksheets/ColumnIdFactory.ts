
/**
 * 表列ID工厂，从A-Z，若满Z则变成AA，依次类推
 */
export class ColumnIdFactory {

  private nowIndexs: number[] = [];
  private min = 65;
  private max = 90;
  public next() {
    this.add(this.nowIndexs.length - 1);
    return this.nowIndexs.map(code => String.fromCharCode(code)).join('');
  }

  private add(index: number) {
    for (let i = index; i >= 0; i--) {
      const code = this.nowIndexs[i];
      if (code + 1 > this.max) {
        this.nowIndexs[i] = this.min;
      } else {
        this.nowIndexs[i]++;
        return;
      }
    }

    /** 如果走到这里则证明需要进位了 */
    this.nowIndexs.push(this.min);
  }
}

/** test */
// const factory = new ColumnIdFactory();
// for(let i=0;i<100;i++) {
//   console.log(factory.next());
// }