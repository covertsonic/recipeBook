//this file handles the template fillers

//Meteor.subscribe('recipes'); //don't want to pull all of recipes for performative reasons.

Template.Recipes.events({
    'click .new-recipe' : function(){
        Session.set('newRecipe', true);
    }
});


Template.Recipes.onCreated(function () {
    let self = this;
    self.autorun(function () { //unsubscribe from old subscriptions
        self.subscribe('recipes');
    })
});

Template.Recipes.helpers({
    recipes: () => {
        xyz = Recipes.find({});
        return xyz;
    }
});

