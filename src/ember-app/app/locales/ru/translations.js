import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Novyjj_proekt',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_proekt',
          title: 'Novyjj_proekt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
