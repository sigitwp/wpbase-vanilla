Meteor.methods({
  vanillaInsert( argument ) {
    check( argument, Object );

    try {
      var documentId = Vanilla.insert( argument );
      return documentId;
    } catch( exception ) {
      return exception;
    }
  },
  vanillaRead( argument ) {
    check( argument, String );

    var document = Vanilla.findOne( argument );

    if ( !document ) {
      throw new Meteor.Error( 'document-not-found', 'No documents found matching this query.' );
    }

    return document;
  },
  vanillaRemove( argument ) {
    check( argument, String );

    try {
      Vanilla.remove( argument );
    } catch( exception ) {
      return exception;
    }
  },
  vanillaUpdate( argument ) {
    check( argument, Object );

    try {
      var documentId = Vanilla.update( argument._id, {
        $set: { 'key': argument.key }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
