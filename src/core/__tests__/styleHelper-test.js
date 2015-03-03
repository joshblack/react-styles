require('core-js');

jest.dontMock('lodash');
jest.dontMock('../rules');
jest.dontMock('../styleHelper');
jest.dontMock('../findStyleContext');

import styleHelper from '../styleHelper';

describe('styleHelper', function() {
  it('should convert styles with no @media styles into a flat object', function () {
    let styles = { 'base': { 'background': 'black' } },
        result = { 'base': { 'background': 'black' } };

    expect(styleHelper(styles, {})).toEqual(result);
  });

  it('should include valid minWidth props in the resulting object', function () {
    let styles = {
      'base': {
        'background': 'black',
        'minWidth': {
          '480': {
            'background': 'blue'
          }
        }
      }
    };

    let result = { 'base': { 'background': 'blue' } };

    expect(styleHelper(styles, { contextWidth: 640 })).toEqual(result);
  });

  it('should exclude invalid minWidth props in the resulting object', function () {
    let styles = {
      'base': {
        'background': 'black',
        'minWidth': {
          '480': {
            'background': 'blue'
          }
        }
      }
    };

    let result = { 'base': { 'background': 'black' } };

    expect(styleHelper(styles, { contextWidth: 320 })).toEqual(result);
  });

  it('should include valid maxWidth props in the resulting object', function () {
    let styles = {
      'base': {
        'background': 'black',
        'maxWidth': {
          '480': {
            'background': 'blue'
          }
        }
      }
    };

    let result = { 'base': { 'background': 'blue' } };

    expect(styleHelper(styles, { contextWidth: 320 })).toEqual(result);
  });

  it('should exclude invalid maxWidth props in the resulting object', function () {
    let styles = {
      'base': {
        'background': 'black',
        'maxWidth': {
          '480': {
            'background': 'blue'
          }
        }
      }
    };

    let result = { 'base': { 'background': 'black' } };

    expect(styleHelper(styles, { contextWidth: 640 })).toEqual(result);
  });
});
