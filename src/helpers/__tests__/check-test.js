require('core-js');

jest.dontMock('../check');
jest.dontMock('lodash');

import check from '../check';

describe('check', function () {
    it('should check that class names from object are present in an object', function () {
        let styles = { 'base': {}, 'open': {}};
        let classNames = { 'base': true, 'open': true };

        expect(check(styles, classNames)).toBe(true);
    });

    it('should check that class names from array are present in an object', function () {
        let styles = { 'base': {}, 'open': {}};
        let classNames = ['base', 'open'];

        expect(check(styles, ...classNames)).toBe(true);
    });
});