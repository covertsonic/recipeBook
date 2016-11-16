//this file handles the template fillers

//Meteor.subscribe('recipes'); //don't want to pull all of recipes for performative reasons.

Template.ShoppingList.onCreated(function () {
    let self = this;
    self.autorun(function () { //unsubscribe from old subscriptions
        self.subscribe('recipes');
    })
});

Template.ShoppingList.helpers({
    ShoppingListHelper: () => {
        shoppingList = Recipes.find({
            inMenu: true
        });
        return shoppingList;
    }
});
