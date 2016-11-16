Template.Recipe.helpers({
    updateRecipeId: function() { //using a "real function instead of ()=> since that will mess up the "this" variable
        return this._id;
    }
});

Template.Recipe.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
        //console.log('click');
    }
});