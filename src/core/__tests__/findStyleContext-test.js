require('core-js');

jest.dontMock('../rules');
jest.dontMock('../findStyleContext');
jest.dontMock('../../vendor/invariant');

import findStyleContext from '../findStyleContext';

describe('findStyleContext', function() {
  it('should return the correct properties given a certain type and context', function() {
    let minWidth = { '320': { background: 'black' } },
        maxWidth = { '480': { background: 'blue' } };

    expect(findStyleContext('minWidth', minWidth, { contextWidth: 480 }))
      .toEqual({ background: 'black' });

    expect(findStyleContext('maxWidth', maxWidth, { contextWidth: 320 }))
      .toEqual({ background: 'blue' });

    expect(findStyleContext('minWidth', minWidth, { contextWidth: 300 })).toEqual({});
    expect(findStyleContext('maxWidth', maxWidth, { contextWidth: 640 })).toEqual({});
  });

  it('should throw if given an invalid type to check against', function () {
    let mediaType = context = {};

    expect(() => findStyleContext('foo', mediaType, context))
    .toThrow('Invariant Violation: findStyleContext: Unable to find a rule for the corresponding type. This function requires a valid @media property in order to find valid styles for the given context.')
  });
});
