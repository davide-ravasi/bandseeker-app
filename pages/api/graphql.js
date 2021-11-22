import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { makeExecutableSchema } from 'graphql-tools'
import { DateResolver, DateTypeDefinition, URLResolver, URLTypeDefinition } from "graphql-scalars"
import bandTypeDefs from '../../lib/models/bands/schema'
import bandResolvers from '../../lib/models/bands/resolvers'
import userResolvers from '../../lib/models/users/resolvers'
import userTypeDefs from '../../lib/models/users/schema'
import connectDb from '../../lib/mongoose'

connectDb()

export const schema = makeExecutableSchema({
  typeDefs: [bandTypeDefs, userTypeDefs],
  resolvers: [bandResolvers, userResolvers],
})

const apolloServer = new ApolloServer({
  schema,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {

  await startServer;
  await apolloServer.createHandler({
    path: "https://bandseeker-graphql-endpoint.netlify.app/",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
