import { isNumber, isString, isStringNumber } from "../types";
import { debugWarn } from "../error";

const SCOPE = "utils/dom/style";

export function addUnit(value: string | number, defaultUnit = "px") {
  const isNumberType = isNumber(value) || isStringNumber(value);
  if (!isNumberType && !value) return "";
  if (isNumberType) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
  debugWarn(SCOPE, "binding value must be a string or number");
  return value;
}
