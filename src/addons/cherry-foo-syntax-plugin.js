import SyntaxBase from '@/core/SyntaxBase';
import mergeWith from 'lodash/mergeWith';

export class FooSyntaxPlugin {
  static install(cherryOptions, ...args) {
    mergeWith(cherryOptions, {
      engine: {
        customSyntax: {
          Foo,
        },
      },
    });
  }
}

export default class Foo extends SyntaxBase {
  static HOOK_NAME = 'foo';

  makeHtml(text) {
    return text.replace(this.RULE.reg, 'bar');
  }

  rule() {
    return {
      reg: /foo/gi,
    };
  }
}
