import { useState } from "react";

export default function ImagePicker({ images }) {
    console.log(images);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    return (
        <div className="flex flex-col gap-5">
            <ul className="flex gap-5">
                {images.map((image) => (
                    <li key={image}>
                        <button
                            onClick={() => setSelectedImage(image)}
                            className={
                                selectedImage === image
                                ? "border-2 border-green-800 rounded-2xl" // only add border to button, if selected
                                    : ""
                            }
                        >
                            {/* show all images */}
                            <img className="rounded-2xl w-20" src={image}></img>
                        </button>
                    </li>
                ))}
            </ul>
            {/* show selected image large */}
            <img className="rounded-2xl max-w-full" src={selectedImage}></img>
        </div>
    );
}
