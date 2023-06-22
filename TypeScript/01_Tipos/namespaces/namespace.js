"use strict";
var Validators;
(function (Validators) {
    Validators.validateText = (text) => (text.length > 3);
    Validators.validateDate = (date) => !isNaN(date.valueOf());
})(Validators || (Validators = {}));
;
console.log(Validators.validateText('Yael'));
console.log(Validators.validateText('Yae'));
//# sourceMappingURL=namespace.js.map