import mergeWith from 'lodash/mergeWith';
import MenuBase from '@/toolbars/MenuBase';

export class AboutUsMenuPlugin {
  static install(cherryConfig, ...args) {
    mergeWith(cherryConfig, {
      toolbars: {
        customMenu: {
          aboutUs: Aboutus,
        },
      },
    });
  }
}

export default class Aboutus extends MenuBase {
  constructor(editor) {
    super(editor);
    this.setName('aboutUs');
  }
  onClick() {
    alert('hello cherry');
    // console.log('about us clicked');
  }
}
