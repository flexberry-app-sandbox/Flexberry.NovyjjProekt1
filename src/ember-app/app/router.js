import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-novyjj-proekt-остатки-l');
  this.route('i-i-s-novyjj-proekt-остатки-e',
  { path: 'i-i-s-novyjj-proekt-остатки-e/:id' });
  this.route('i-i-s-novyjj-proekt-остатки-e.new',
  { path: 'i-i-s-novyjj-proekt-остатки-e/new' });
  this.route('i-i-s-novyjj-proekt-склад-l');
  this.route('i-i-s-novyjj-proekt-склад-e',
  { path: 'i-i-s-novyjj-proekt-склад-e/:id' });
  this.route('i-i-s-novyjj-proekt-склад-e.new',
  { path: 'i-i-s-novyjj-proekt-склад-e/new' });
  this.route('i-i-s-novyjj-proekt-товар-l');
  this.route('i-i-s-novyjj-proekt-товар-e',
  { path: 'i-i-s-novyjj-proekt-товар-e/:id' });
  this.route('i-i-s-novyjj-proekt-товар-e.new',
  { path: 'i-i-s-novyjj-proekt-товар-e/new' });
});

export default Router;
