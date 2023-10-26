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
        fetch(searchBaseUrl + search)
            .catch((err) => console.log(err))
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <Header onSearch={handleSearch} />
            <Results products={products} />
            <footer>Footer</footer>
        </main>
    );
}
