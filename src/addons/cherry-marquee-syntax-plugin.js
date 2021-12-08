import ParagraphBase from '@/core/ParagraphBase';
import mergeWith from 'lodash/mergeWith';
import { escapeHTMLSpecialChar } from '@/utils/sanitize';

export class MarqueeSyntaxPlugin {
  static install(cherryOptions, ...args) {
    mergeWith(cherryOptions, {
      engine: {
        customSyntax: {
          Marquee,
        },
      },
    });
  }
}

export default class Marquee extends ParagraphBase {
  static HOOK_NAME = 'marquee';

  /**
   * 
   * @param {string} text 
   * @returns 
   */
  beforeMakeHtml(text) {
    return text.replace(this.RULE.reg, (match, content, trailingChar) => {
      return `\n<marquee>${
        escapeHTMLSpecialChar(content)
      }</marquee>${trailingChar}`;
    });
  }

  rule() {
    return {
      reg: /(?:^|\n)\s*[/]{3}\n(.*)\n[/]{3}(\n|$)/gi,
    };
  }
}
