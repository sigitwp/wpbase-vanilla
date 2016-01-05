Meteor.publish( 'vanilla', function() {
  return Vanilla.find( { 'owner': this.userId }, { fields: { 'owner': 1 } } );
});
