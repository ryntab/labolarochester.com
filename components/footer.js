import Link from "next/link";

export default function Footer() {
    return(
        <div className="bg-red-500 w-full px-8 py-4 text-center text-white bg-stone-900 bg-blur justify-between md:flex">
            <small className="block text-sm font-bold py-2">
                <Link href="https://www.termsfeed.com/live/5f63db38-e531-4f95-b806-49d7b2c97e55">
                    Privacy Policy
                </Link>
                &nbsp;&bull;&nbsp;
                <Link href="https://www.termsfeed.com/live/b4e62ae9-610d-4897-bfdf-c437d6cbebee">
                    Terms of Service
                </Link>
            </small>
            <small className="text-xs">
                Copyright &copy; 2023 La Bola
                <br />
                Made With &#x2764; By <a href="https://dylandunn.me" className="underline">Dylan Dunn</a>
            </small>
        </div>
    )
}