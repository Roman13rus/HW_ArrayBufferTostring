export default class ArrayBufferConverter {
  constructor(funcBuffer) {
    this.buffer = funcBuffer();
  }

  load() {
    const outView = new Uint16Array(this.buffer);
    return outView;
  }

  toString() {
    let resultString = '';
    for (let i = 0; i < this.load().byteLength; i += 1) {
      resultString += String.fromCharCode(this.load()[i]);
    }
    return resultString;
  }
}
