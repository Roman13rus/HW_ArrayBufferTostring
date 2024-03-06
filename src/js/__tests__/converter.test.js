import getBuffer from '../buffer';
import ArrayBufferConverter from '../converter';

test('test to verify the operation of the data loader method', () => {
  const view = new ArrayBufferConverter(getBuffer);
  const expected = 106;
  const data = view.load();
  const received = data.byteLength;
  expect(received).toBe(expected);
});

test('checking the operation of the method for translating stored information in the buffer into a string', () => {
  const view = new ArrayBufferConverter(getBuffer);
  const expected = 'string';
  view.load();
  const data = view.toString();
  const received = typeof data;
  expect(received).toBe(expected);
});
