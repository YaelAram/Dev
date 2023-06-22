function CheckValidProductId(): Function {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) return console.error(`El id ${id} no es valido.`);
      else return originalMethod(id);
    };
  };
};

function ReadOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return 'qweqweqew';
      },
      set(this, val) {
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        });
      }
    };

    return descriptor;
  };
};

export class Product {
  @ReadOnly(false)
  public url: string = 'www.products.com';

  constructor(
    public name: string
  ) { };

  @CheckValidProductId()
  saveProductOnDB(id: number) {
    console.log(`Product saved on DB with Id ${id}`);
  };
};
