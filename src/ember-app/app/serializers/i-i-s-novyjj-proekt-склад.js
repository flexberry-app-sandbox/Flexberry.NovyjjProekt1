import { Serializer as СкладSerializer } from
  '../mixins/regenerated/serializers/i-i-s-novyjj-proekt-склад';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СкладSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
