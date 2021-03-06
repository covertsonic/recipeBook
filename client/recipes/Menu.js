//this file handles the template fillers

//Meteor.subscribe('recipes'); //don't want to pull all of recipes for performative reasons.

Template.Menu.onCreated(function () {
    let self = this;
    self.autorun(function () { //unsubscribe from old subscriptions
        self.subscribe('recipes');
    })
});

Template.Menu.helpers({
    recipes: () => {
        xyz = Recipes.find({
            inMenu: true
        });
        return xyz;
    }
});
