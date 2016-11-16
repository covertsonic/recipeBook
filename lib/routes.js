if (Meteor.isClient) {  //because routes.js is outside of client side, this is necessary for our onLogin and onLogout.
    Accounts.onLogin(function () { //redirect users upon login
        //dependency on gwendall:auth-client-callbacks
        FlowRouter.go('recipe-book');
    });

    Accounts.onLogout(function () { //redirect users upon logout
        //dependency on gwendall:auth-client-callbacks
        FlowRouter.go('home');
    });

    FlowRouter.triggers.enter([function (context, redirect) { //if user is not logged in, send to home route (home page)
        let x = context; //not used yet
        let y = redirect;//not used yet
        if (!Meteor.userId()) {
            FlowRouter.go('home');
        }
    }]);
} //end of if Meteor isClient

FlowRouter.route('/', {
    name: 'home',
    action(){
        if (Meteor.userId()) { //if user is logged in, send to recipe-book route
            FlowRouter.go('recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
        name: 'recipe-book',
        action(){
            GAnalytics.pageview();
            BlazeLayout.render('MainLayout', {main: 'Recipes'}); //uses the dynamic templating from MainLayout.html which accepts an input for "main" which we set to "test" here
        }
    }
);

FlowRouter.route('/recipe/:id', { //could be _id,underscored, if you wanted; the RecipeSingle.js file will use this from a flowrouter variable
        name: 'recipe',
        action(){
            GAnalytics.pageview();
            BlazeLayout.render('MainLayout', {main: 'RecipeSingle'}); //uses the dynamic templating from MainLayout.html which accepts an input for "main" which we set to "test" here
        }
    }
);

FlowRouter.route('/menu', {
    name: 'menu',
    action(){
        BlazeLayout.render('MainLayout', {
            main: 'Menu'
        });
    }
});
FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action(){
        BlazeLayout.render('MainLayout', {
            main: 'ShoppingList'
        });
    }
});


