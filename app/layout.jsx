import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata = {
  title: "Fitch Tecnologia | iPhones, Android e Games em Angra dos Reis",
  description:
    "Loja premium de tecnologia com iPhones lacrados, seminovos revisados, Android e videogames. Retirada na loja e entrega combinada.",
  openGraph: {
    title: "Fitch Tecnologia",
    description:
      "Catalogo premium com iPhones lacrados, seminovos e eletronicos selecionados.",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
        <FloatingWhatsApp href={WHATSAPP_LINK} />
      </body>
    </html>
  );
}
