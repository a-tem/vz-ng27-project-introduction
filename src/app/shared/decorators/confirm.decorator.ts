export function Confirm(confirmMessage: string) {
  return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      return window.confirm(confirmMessage) ? originalMethod.apply(this, args) : false;
    };

    return descriptor;
  };
}
