Vanilla = new Meteor.Collection( 'vanilla' );

Vanilla.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Vanilla.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let VanillaSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  }
});

Vanilla.attachSchema( VanillaSchema );
