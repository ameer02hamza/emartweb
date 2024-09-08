import { ReduxProvider } from "@/redux/emart-redux/store/redux.provider";
import { Lang } from "../../../../getlang.locale";
import AuthStartup from "./page";

export default async function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Lang };
}) {
  return (
    <ReduxProvider>
      <AuthStartup children={children} params={params} />
      </ReduxProvider>
  );
}
