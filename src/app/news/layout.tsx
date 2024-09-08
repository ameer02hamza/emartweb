import Header from "@/components/news-components/header";

export default async function NewsMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto ">
      {children}
      </div>
    </>
  );
}
