import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import { Stack } from "@chakra-ui/react";

const inter = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lorem",
  description: "Generated by create next app",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Stack gap={0}>
            <Stack>
              <Navbar />
            </Stack>
            <Stack>{children}</Stack>
          </Stack>
        </Providers>
      </body>
    </html>
  );
}
