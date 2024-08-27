import Header from "./header.tsx";
import Footer from "./footer.tsx";

export default function Layout({
  children: children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sm:mx-10">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
