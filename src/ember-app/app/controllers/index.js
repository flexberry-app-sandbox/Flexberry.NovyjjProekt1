import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.novyjj-proekt.caption'),
          title: i18n.t('forms.application.sitemap.novyjj-proekt.title'),
          children: [{
            link: 'i-i-s-novyjj-proekt-склад-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt.i-i-s-novyjj-proekt-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt.i-i-s-novyjj-proekt-склад-l.title'),
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-остатки-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt.i-i-s-novyjj-proekt-остатки-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt.i-i-s-novyjj-proekt-остатки-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-товар-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt.i-i-s-novyjj-proekt-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt.i-i-s-novyjj-proekt-товар-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})