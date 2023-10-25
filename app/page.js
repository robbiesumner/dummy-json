import Header from "./components/header.js";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <Header />
            <footer>Footer</footer>
        </main>
    );
}
