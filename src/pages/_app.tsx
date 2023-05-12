import { Provider } from "react-redux";
import "../globals.css";
import { AppProps } from "next/app";
import { store } from "@/Redux/store";
interface MyAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps["pageProps"];
}

export default function MyApp({
  Component,
  pageProps,
}: MyAppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
