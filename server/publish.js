Meteor.publish('recipes', function () {
    return Recipes.find({author: this.userId});
});
Meteor.publish('singleRecipe', function (id) { //purely for performance reasons
    check(id, String); //otherwise will get an error if not String
    //console.log(id);
    return Recipes.find({_id: id});
});