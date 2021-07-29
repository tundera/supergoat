export { Asserts } from './utils/asserts';
export { ArrayUtils } from './utils/array-utils';
export { RandomUtils } from './utils/random-utils';

export * as Typeguards from './utils/typeguards';
export type { UnPromisify } from './utils/type-utils';

export const sayHello = (name: string): string => {
  return `I'm the @monorepo/components component telling ${name} !`;
};
