import { FaHome } from "react-icons/fa";
import "./globals.css";
import { FcAbout } from "react-icons/fc";
import { GrContactInfo, GrServices } from "react-icons/gr";
import { Topbar } from "@/components/Topbar/Topbar";
import { Bottombar } from "@/components/Topbar/Bottombar/Bottombar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Inline script to set dark mode based on localStorage before rendering */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="dark:bg-darkbackground custom-scrollbar bg-gray-200  flex flex-col h-screen min-h-screen text-white">
        <Topbar />
        <Bottombar/>
        <div className="flex-1 flex">
          {children}
        </div>
      </body>
    </html>
  );
}
