import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Object.extend({
  canView: alias('isAdmin')
});
