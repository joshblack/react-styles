require('core-js');

jest.dontMock('../sxw');
jest.dontMock('../check');
jest.dontMock('../../vendor/invariant')
jest.dontMock('lodash');

import sxw from '../sxw';

describe('sxw', function() {
    it('should return an object with the correct class names applied', function() {
        let styles = { 'base': { background: 'black' }, 'open': { background: 'blue' }};

        let classNamesArray = ['open'];
        let classNamesObject = { base: false, open: true };
        let classNamesObjectMissing = { open: true };

        let result = { background: 'black' };

        expect(sxw(styles, ...classNamesArray)).toEqual(result);
        expect(sxw(styles, classNamesObject)).toEqual(result);
        expect(sxw(styles, classNamesObjectMissing)).toEqual(result);
    });

    it('should throw if given an invalid styles object', function () {
        expect(() => sxw('bad', 'params')).toThrow('Invariant Violation: The sxw helper requires a valid styles object to be passed in as the first argument.');
    });

    it('should throw if given an invalid classNames list', function () {
        let styles = { 'base': {}, 'open': {} };
        let classNames = ['base', 'foo'];

        expect(() => sxw(styles, ...classNames)).toThrow('Invariant Violation: All the class names passed into the sxw helper should exist on the styles object passed in as the first argument.');
    });
});