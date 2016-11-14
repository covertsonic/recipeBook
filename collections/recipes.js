Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function (userId, doc) { //this is required to insert anything into the db
        let x = doc;//placeholder needs to be used at some point....
        return !!userId; //if userid exists, this will return true
    },
    update: function (userId, doc) {
        let x = doc;//placeholder needs to be used at some point....
        return !!userId;
    }
});

Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    }
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    ingredients: {
        type: [Ingredient] //Note the brackets allow you to enter many (i.e. with plus boxes)
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});


Meteor.methods({
    toggleMenuItem: function (id, currentState) {
        Recipes.update(id, {
            $set: {
                inMenu: !currentState
            }

        });
    }
});

Recipes.attachSchema(RecipeSchema);