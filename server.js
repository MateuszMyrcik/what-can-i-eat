const express = require('express');
const fs = require('fs');
const cors = require('cors')

let rawData = fs.readFileSync('./mocks/randomRecipe1.json');
let randomRecipe = JSON.parse(rawData);
// console.log(randomRecipe);
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    recipe: Recipe
  }
  
  type Recipe {
    id: ID
    image: String
    instructions: String
    extendedIngredients(amount: Int!): [ExtendedIngredients]
    cuisines: [String]
  }
  
  type ExtendedIngredients {
    id: ID
    name: String
    amount: Int!
  }
  
  
`);
// The root provides a resolver function for each API endpoint
const root = {
    recipe: () => {
        return randomRecipe.recipe;
    },
};

const app = express();
// app.use("/graphql", function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Content-Type, Authorization, Content-Length, X-Requested-With"
//     );
//     if (req.method === "OPTIONS") {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// });
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');