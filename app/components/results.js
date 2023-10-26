import Image from "next/image";

export default function Results({ products }) {
    console.log(products);

    return (
        <ul className="flex flex-wrap gap-5">
            {products.map((product) => (
                <li
                    key={product.id}
                    className="flex bg-white h-28 w-full sm:w-96 rounded-3xl p-4 gap-2 border-2 border-green-800 shadow-xl hover:shadow-2xl"
                >
                        <div className="flex-1 w-full h-full relative">
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                fill={true}
                                className="object-contain rounded-2xl"
                            />
                        </div>
                        <div className="flex-1">
                            <p>
                                <span>&#9734; </span>
                                <span>{product.rating}</span>
                            </p>
                            <h2 className="whitespace-nowrap">
                                {product.title}
                            </h2>
                            <p>
                                <span className="text-red-500 text-2xl">{`${(
                                    product.price -
                                    (product.price *
                                        product.discountPercentage) /
                                        100
                                ).toFixed(2)}€`}</span>
                                <span className="text-xs">
                                    {`-${product.discountPercentage}%`}
                                </span>
                            </p>
                        </div>
                </li>
            ))}
        </ul>
    );
}
