import { Outlet } from "react-router";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="bg-paper flex-1 p-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
