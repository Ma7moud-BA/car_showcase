import "./globals.css";
import { NavBar, Footer } from "@/components";
export const metadata = {
	title: "Car Hub",
	description: "discover the best cars in the world.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="relative">
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
