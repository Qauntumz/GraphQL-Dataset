const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
  type Nation {
    Country: String
    Year: String
    Area: Int
    Total_population: Int
  }

  type Mutation {
    post(Country: String!, Year: String!, Area: Int!, Total_population: Int): Nation!
  }

  type Query {
    nations: [Nation]
  }
`;

var nations = [
    {

        "Country": "Albania",
     
        "Year": "2000",
     
        "Area": 28748,
     
        "Total_population": 3401198
     
      },
     
      {
     
        "Country": "Albania",
     
        "Year": "2001",
     
        "Area": 28748,
     
        "Total_population": 3073734
     
      },
     
      {
     
        "Country": "Albania",
     
        "Year": "2002",
     
        "Area": 28748,
     
        "Total_population": 3093465
     
      },
     
      {
     
        "Country": "Albania",
     
        "Year": "2003",
     
        "Area": 28748,
     
        "Total_population": 3111162
     
      },
];

const resolvers = {
  Query: {
    nations: () => nations,
  },
  Mutation: {
    post: (parent, args) => {
    
    const Nation = {
      Country: args.Country,
      Year: args.Year,
      Area: args.Area,
      Total_population: args.Total_population,
    }
    nations.push(Nation)
    return Nation
    }
  }
};

var server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`server up at ${url}`);
});