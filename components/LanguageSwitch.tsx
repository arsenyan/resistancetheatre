import Link from "next/link";

export default function LanguageSwitch() {
    return (
        <div className='flex flex-col ml-5'>
            <Link href='/' className="border text-left h-7 border-black w-[40px] pt-0 pl-0">
            <div className="absolute -mt-2 w-[40px]">рус</div>
            </Link>
            <Link href='/' className="h-5 w-10 pt-0 pl-0">
            <div className="absolute -mt-2 text-right w-[40px]">eng</div>
            </Link>
        </div>
    )
}