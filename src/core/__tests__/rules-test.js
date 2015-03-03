jest.dontMock('../rules');
jest.dontMock('../../vendor/invariant');

import rules from '../rules';

describe('rules', function() {
  it('should properly handle the minWidth case', function () {
    let context = { contextWidth: 480 };

    expect(rules.get('minWidth')(640, context)).toBe(false);
    expect(rules.get('minWidth')(320, context)).toBe(true);
  });

  it('should properly handle the maxWidth case', function () {
    let context = { contextWidth: 480 };

    expect(rules.get('maxWidth')(640, context)).toBe(true);
    expect(rules.get('maxWidth')(320, context)).toBe(false);
  });

  it('should throw if an invalid context is given', function () {
    let context = {},
        styleWidth = '320';

    expect(() => {
      let rule = rules.get('minWidth');

      return rule(styleWidth, context);
    })
    .toThrow('Invariant Violation: A contextWidth must be set on the context object passed into React Styles in order for media query rules to work.');

    expect(() => {
      let rule = rules.get('maxWidth');

      return rule(styleWidth, context);
    })
    .toThrow('Invariant Violation: A contextWidth must be set on the context object passed into React Styles in order for media query rules to work.');
  });

  it('should throw if the styleWidth given is NaN', function () {
    let context = { contextWidth: 480 },
        styleWidth = () => {};

      expect(() => {
        let rule = rules.get('minWidth')

        return rule(styleWidth, context)
      })
      .toThrow('Invariant Violation: Keys in media query declarations must be valid numbers.');
  });
});
