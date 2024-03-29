import { Provider } from "react-redux";
import "../globals.css";
import { persistor, store } from "@/Redux/store";
import { MyAppProps } from "@/types/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min
      cacheTime: 1000 * 60 * 30, // 30 min
    },
  },
});

export default function MyApp({
  Component,
  pageProps,
}: MyAppProps): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
