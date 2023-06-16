import "./globals.css";
import { Poppins } from "next/font/google";
import { NavBar } from "@/components";
import { getCurrentScheme } from "@/utils/index";
import { ApolloWrapper } from "./ApolloWrapper";

const fontFamily = Poppins({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Krushil Naik | Software Engineer",
  description:
    "Software Engineer with experience in fullstack development and DevOps (Jenkins, AWS, Terraform, Python)",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const scheme = await getCurrentScheme();

  return (
    <html lang="en" className={(scheme as string) ?? "dark"}>
      <body className={fontFamily.className}>
        <div className="grid grid-rows-[auto_auto_auto] grid-cols-1 [&>*]:col-span-full min-h-screen">
          <ApolloWrapper>
            <header className="relative z-10 font-medium w-full row-[1_/_2]">
              <NavBar />
            </header>

            <main className="flex [&>*]:flex-1 pt-16 row-span-full">{children}</main>

            <footer className="relative z-10 row-[-2_/_-1]">
              <div className="text-center py-7 text-sm dark:opacity-40">
                &copy; 2023 | Made with 🌮 by Krushil Naik
              </div>
            </footer>
          </ApolloWrapper>
        </div>
      </body>
    </html>
  );
}
