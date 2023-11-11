"use client";
import { useState, useEffect } from "react";

import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Header from "../components/header.js";
import { productionBrowserSourceMaps } from "@/next.config.js";

export default function ProductPage({ params }) {
    // load product on render
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch("https://dummyjson.com/products/" + params.productId)
            .catch((err) => console.log(err))
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 max-w-7xl m-auto">
            <Header visibleSearch={false} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            {/* Free space under results if not enough */}
            <div className="flex-1"></div>
            <footer>DummyProducts&#9415;</footer>
        </main>
    );
}
