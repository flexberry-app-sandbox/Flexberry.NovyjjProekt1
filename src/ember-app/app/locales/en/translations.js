import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNovyjj_proektОстаткиLForm from './forms/i-i-s-novyjj-proekt-остатки-l';
import IISNovyjj_proektСкладLForm from './forms/i-i-s-novyjj-proekt-склад-l';
import IISNovyjj_proektТоварLForm from './forms/i-i-s-novyjj-proekt-товар-l';
import IISNovyjj_proektОстаткиEForm from './forms/i-i-s-novyjj-proekt-остатки-e';
import IISNovyjj_proektСкладEForm from './forms/i-i-s-novyjj-proekt-склад-e';
import IISNovyjj_proektТоварEForm from './forms/i-i-s-novyjj-proekt-товар-e';
import IISNovyjj_proektОстаткиModel from './models/i-i-s-novyjj-proekt-остатки';
import IISNovyjj_proektСкладModel from './models/i-i-s-novyjj-proekt-склад';
import IISNovyjj_proektТоварModel from './models/i-i-s-novyjj-proekt-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-novyjj-proekt-остатки': IISNovyjj_proektОстаткиModel,
    'i-i-s-novyjj-proekt-склад': IISNovyjj_proektСкладModel,
    'i-i-s-novyjj-proekt-товар': IISNovyjj_proektТоварModel
  },

  'application-name': 'Novyjj_proekt',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Novyjj_proekt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_proekt',
          title: 'Novyjj_proekt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'novyjj-proekt': {
          caption: 'Novyjj_proekt',
          title: 'Novyjj_proekt',
          'i-i-s-novyjj-proekt-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-novyjj-proekt-остатки-l': {
            caption: 'Остатки',
            title: ''
          },
          'i-i-s-novyjj-proekt-товар-l': {
            caption: 'Товар',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-novyjj-proekt-остатки-l': IISNovyjj_proektОстаткиLForm,
    'i-i-s-novyjj-proekt-склад-l': IISNovyjj_proektСкладLForm,
    'i-i-s-novyjj-proekt-товар-l': IISNovyjj_proektТоварLForm,
    'i-i-s-novyjj-proekt-остатки-e': IISNovyjj_proektОстаткиEForm,
    'i-i-s-novyjj-proekt-склад-e': IISNovyjj_proektСкладEForm,
    'i-i-s-novyjj-proekt-товар-e': IISNovyjj_proektТоварEForm
  },

});

export default translations;
