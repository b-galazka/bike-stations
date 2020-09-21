import { Type } from '@angular/core';

export function getClassMethodsNames<T>(Class: Type<T>): string[] {
  const prototype = Class.prototype || Class;
  const props = Object.getOwnPropertyNames(prototype);
  const nestedPrototype = Object.getPrototypeOf(prototype);

  const methodsNames = props.filter(prop => {
    try {
      return typeof prototype[prop] === 'function';
    } catch (err) {
      return false;
    }
  });

  if (nestedPrototype && nestedPrototype.constructor !== Object) {
    methodsNames.push(...getClassMethodsNames(nestedPrototype));
  }

  return methodsNames;
}
