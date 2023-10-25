import { Londrina_Shadow } from "next/font/google";

const londrina = Londrina_Shadow({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function Header() {
    return (
        <header className="w-full">
            <div className="flex gap-5 items-center justify-between w-full">
                <h1 className={`${londrina.className} text-6xl text-green-800`}>
                    Dummy
                </h1>
                <form className="flex bg-white rounded-full p-2 flex-1">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="focus:outline-none w-full"
                    ></input>
                </form>
            </div>
            <div className="border-b-2 border-green-800 border-solid shadow-black shadow w-full mt-3"></div>
        </header>
    );
}
