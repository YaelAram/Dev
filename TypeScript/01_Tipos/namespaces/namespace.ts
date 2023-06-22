namespace Validators {
  export const validateText = (text: string): boolean => (text.length > 3);
  export const validateDate = (date: Date): boolean => !isNaN(date.valueOf());
};

console.log(Validators.validateText('Yael'));
console.log(Validators.validateText('Yae'));
