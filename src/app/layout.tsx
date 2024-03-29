import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
        >
            <Navbar />
          {children}
        </ThemeProvider>

      </body>
    </html>
  )
}
