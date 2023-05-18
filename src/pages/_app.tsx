import { Provider } from "react-redux";
import "../globals.css";
import { store } from "@/Redux/store";
import { MyAppProps } from "@/types/types";

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
