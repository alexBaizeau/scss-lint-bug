import Ability from 'demo-bug/abilities/emma';
//import Ember from 'ember';
import { module } from 'qunit';
import { test } from 'ember-qunit';

module('ability:emma', 'ability - emma');

test("example", function(assert) {
  let ability = Ability.create({
    isAdmin: true
  });
  assert.ok(ability.get('canView'));
});
