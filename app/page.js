"use client";

import { useState, useEffect } from "react";

import Header from "./components/header.js";
import Results from "./components/results.js";

export default function Home() {
    // load all products on first render
    useEffect(() => {
        handleSearch("");
    }, []);

    const searchBaseUrl = "https://dummyjson.com/products/search?q=";
    const [products, setProducts] = useState([]);

    const handleSearch = (search) => {
        // function for fetching from api with search from header
        fetch(searchBaseUrl + search)
            .catch((err) => console.log(err))
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 max-w-7xl m-auto">
            <Header onSearch={handleSearch} visibleSearch={true}/>
            <Results products={products} />
            {/* Free space under results if not enough */}
            <div className="flex-1"></div>
            <footer>DummyProducts&#9415;</footer>
        </main>
    );
}
