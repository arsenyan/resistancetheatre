import Link from "next/link";

export default function LanguageSwitch() {
    return (
        <div className='flex flex-col'>
            <Link href='/' className="border border-black pt-0 pl-0">ru</Link>
            <Link href='/'>en</Link>
        </div>
    )
}