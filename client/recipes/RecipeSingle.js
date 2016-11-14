Template.RecipeSingle.onCreated(function () { //template RecipeSingle is defined in RecipeSingle.html
    let self = this;
    self.autorun(function () { //unsubscribe from old subscriptions
        let id = FlowRouter.getParam('id'); //defined  by the :id in the router.js file
        self.subscribe('singleRecipe', id); //used in the publish.js file for subscriptions
    })
});

Template.RecipeSingle.helpers({
    recipe: () => {
        let id = FlowRouter.getParam('id'); //defined  by the :id in the router.js file
        return Recipes.findOne({_id: id});

    }
});