import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОстаткиMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-остатки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОстаткиMixin, Validations, {
});

defineProjections(Model);

export default Model;
