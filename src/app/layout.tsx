import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import { getCurrentScheme } from "@/utils";
import { ApolloWrapper } from "./ApolloWrapper";

const fontFamily = Poppins({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const scheme = await getCurrentScheme();

  return (
    <html lang="en" className={(scheme as string) ?? "dark"}>
      <body className={fontFamily.className}>
        <div className="flex flex-col min-h-screen antialiased transition-colors duration-500">
          <ApolloWrapper>
            <header className="font-medium">
              <NavBar />
            </header>

            <main className="flex-grow flex [&>*]:flex-1">{children}</main>

            <footer className="">
              <div className="text-center max-w-7xl mx-auto px-4 py-5 text-sm dark:opacity-40">
                &copy; 2023 | Made with 🌮 by Krushil Naik
              </div>
            </footer>
          </ApolloWrapper>
        </div>
      </body>
    </html>
  );
}
