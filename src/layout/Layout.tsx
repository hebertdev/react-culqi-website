interface Props {
  children: JSX.Element | JSX.Element[];
}

import { AppHeader } from "components/Header";
import { Footer } from "components/Footer";

export function Layout({ children }: Props) {
  return (
    <>
      <AppHeader />
      {children}
      <Footer />
    </>
  );
}
