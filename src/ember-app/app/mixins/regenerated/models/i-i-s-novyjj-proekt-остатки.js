import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('string'),
  количество: DS.attr('string'),
  склад: DS.belongsTo('i-i-s-novyjj-proekt-склад', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-novyjj-proekt-товар', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-остатки.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-остатки.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-остатки.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-остатки.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОстаткиE', 'i-i-s-novyjj-proekt-остатки', {
    дата: attr('Дата', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    склад: belongsTo('i-i-s-novyjj-proekt-склад', 'Склад', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    товар: belongsTo('i-i-s-novyjj-proekt-товар', 'Товар', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ОстаткиL', 'i-i-s-novyjj-proekt-остатки', {
    дата: attr('Дата', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    склад: belongsTo('i-i-s-novyjj-proekt-склад', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    товар: belongsTo('i-i-s-novyjj-proekt-товар', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
