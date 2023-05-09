import "../globals.css";
import { AppProps } from "next/app";
interface MyAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps["pageProps"];
}

export default function MyApp({
  Component,
  pageProps,
}: MyAppProps): JSX.Element {
  return <Component {...pageProps} />;
}
