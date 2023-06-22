"use strict";
(() => {
    var _a;
    ;
    ;
    ;
    const flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Time travel', 'Super strenght']
    };
    console.log(flash);
    const superman = {
        name: 'Super Man',
        powers: ['Super Strenght', "Fly"],
        address: {
            id: 1,
            city: 'Metropolis',
            getCity() {
                return `The id is ${this.id} for ${this.city}`;
            },
        },
        getPowers() {
            return this.powers;
        }
    };
    console.log(superman);
    console.log((_a = superman.address) === null || _a === void 0 ? void 0 : _a.getCity(1));
    const groot = {
        name: 'Goot',
        powers: ['He can grow his arms'],
        planet: 'Mars'
    };
    console.log(groot);
})();
//# sourceMappingURL=interfaces.js.map