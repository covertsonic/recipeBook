Template.Recipe.helpers({
    updateRecipeId: function() { //using a "real function instead of ()=> since that will mess up the "this" variable
        //console.log(this._id);
        return this._id;
    }
});

Template.Recipe.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
        //console.log('click');
    },
    'click .fa-trash' : function(){ //again ()=> will make it so the this is not accessible.
        //console.log(this);
        Meteor.call('deleteRecipe',this._id);

    },
    'click .fa-pencil' : function(){ //again ()=> will make it so the this is not accessible.
        Session.set('editMode',!Session.get('editMode'));
    }
});