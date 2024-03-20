import MobileNav from "@/components/layout/MobileNav";
import Sidebar from "@/components/layout/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
