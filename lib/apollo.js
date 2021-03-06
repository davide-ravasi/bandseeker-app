import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export function withApollo(PageComponent) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  WithApollo.getInitialProps = async (ctx) => {
    const { AppTree } = ctx;
    const apolloClient = (ctx.apolloClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    if (typeof window === "undefined") {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import("@apollo/client/react/ssr");
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient,
            }}
          />
        );
      } catch (e) {
        console.error(e);
      }
    }

    const apolloState = apolloClient.cache.extract();

    return {
      ...pageProps,
      apolloState,
    };
  };
  return WithApollo;
}

const initApolloClient = (initialState = {}) => {
  const ssrMode = typeof window === "undefined";
  const cache = new InMemoryCache().restore(initialState);
  const client = new ApolloClient({
    ssrMode,
    uri: "https://bandseeker-graphql-endpoint.netlify.app",
    cache,
  });
  return client;
};
