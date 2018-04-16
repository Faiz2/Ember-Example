import { helper } from '@ember/component/helper';

export function equales([a, b]) {
  return a === b;
}

export default helper(equales);
