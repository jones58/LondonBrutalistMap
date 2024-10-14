import Header from "./header.tsx";
import Footer from "./footer.tsx";
import Meta from "./meta.tsx";

export default function Layout({
  children: children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Meta />
      <body>
        <div className="sm:mx-10">
          <Meta />
          <Header />
          <div className="py-28 sm:py-0">{children}</div>
          <Footer />
        </div>
      </body>
    </>
  );
}
