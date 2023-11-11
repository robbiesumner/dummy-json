"use client";
import { useState, useEffect } from "react";

import Header from "../components/header.js";
import ImagePicker from "../components/imagePicker.js";

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
            <div className="flex justify-center flex-wrap gap-5">
                {/* Image picker element */}
                <div className="flex flex-col gap-5">
                    {/* Sometimes does not load, so put in check for product.images */}
                    {product.images ? (
                        <ImagePicker images={product.images} />
                    ) : (
                        <></>
                    )}
                </div>
                {/* Product info */}
                <div className="flex-1 flex flex-col">
                    <p className="line-through decoration-red-500">
                        {product.price + "€"}
                    </p>
                    <p>
                        <span className="text-red-500 text-2xl">{`${(
                            product.price -
                            (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}€`}</span>
                        <span className="text-xs">
                            {`-${product.discountPercentage}%`}
                        </span>
                    </p>
                    {/* white box */}
                    <div className="bg-white rounded-3xl p-4 border-2 border-green-800 shadow-xl">
                        <h1 className="text-2xl">{product.title}</h1>
                        <p>
                            <span>&#9734; </span>
                            <span>{product.rating}</span>
                        </p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>

            {/* Free space under results if not enough, pushes other item to top */}
            <div className="flex-1"></div>
            <footer>DummyProducts&#9415;</footer>
        </main>
    );
}
