import { Provider } from "react-redux";
import "../globals.css";
import { store } from "@/Redux/store";
import { MyAppProps } from "@/types/types";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function MyApp({
  Component,
  pageProps,
}: MyAppProps): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
