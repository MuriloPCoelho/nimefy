import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main className="min-w-full min-h-dvh">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
