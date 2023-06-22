/**
 * Save as JS file
 * const setup = {
    setupFiles: [ "./jest.setup.js" ]
    }
    export default setup;
 */

// Save as CJS file
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: [ './jest.setup.js' ]
};
