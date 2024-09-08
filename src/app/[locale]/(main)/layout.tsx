import Home from "../page";
import { Lang } from "../../../../getlang.locale";
import NavBar from "@/components/emart-component/navbar/navbar";
import { ReduxProvider } from "@/redux/emart-redux/store/redux.provider";

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Lang };
}) {
  return (
    <ReduxProvider>
      <NavBar />
      <Home children={children} params={params} />
    </ReduxProvider>
  );
}
