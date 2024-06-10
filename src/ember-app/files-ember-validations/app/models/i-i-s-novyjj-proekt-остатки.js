import {
  defineNamespace,
  defineProjections,
  Model as ОстаткиMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-остатки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОстаткиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
