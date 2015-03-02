require('core-js');

jest.dontMock('../sx');
jest.dontMock('../check');
jest.dontMock('lodash');
jest.dontMock('../../vendor/invariant');

import sx from '../sx';

describe('sx', function () {
    it('should return an object with the correct class names applied', function() {
        let styles = { 'base': { background: 'black' }, 'open': { background: 'blue' }};

        let classNamesArray = ['base'];
        let classNamesObject = { base: true, open: false };
        let classNamesObjectMissing = { base: true };

        let result = { background: 'black' };

        expect(sx(styles, ...classNamesArray)).toEqual(result);
        expect(sx(styles, classNamesObject)).toEqual(result);
        expect(sx(styles, classNamesObjectMissing)).toEqual(result);
    });

    it('should throw if given an invalid styles object', function () {
        expect(() => sx('bad', 'params')).toThrow('Invariant Violation: The sx helper requires a valid styles object to be passed in as the first argument.');
    });

    it('should throw if given an invalid classNames list', function () {
        let styles = { 'base': {}, 'open': {} };
        let classNames = ['base', 'foo'];

        expect(() => sx(styles, ...classNames)).toThrow('Invariant Violation: All the class names passed into the sx helper should exist on the styles object passed in as the first argument.');
    });
});