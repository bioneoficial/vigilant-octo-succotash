import { Provider } from "react-redux";
import "../globals.css";
import { store } from "@/Redux/store";
import { MyAppProps } from "@/types/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

const queryClient = new QueryClient();

export default function MyApp({
  Component,
  pageProps,
}: MyAppProps): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}
