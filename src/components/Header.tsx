import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
    const router = useRouter()
    return (
        <div className="flex justify-between items-center mb-12">
            <div>
                <Link href="/" className="text-[#41F092] font-cy text-[14px]">vStudio</Link>
            </div>
            <div>
                <button className="text-gray-900 py-1 px-5 bg-[#41F092] rounded-full" onClick={() => router.push('/UnsignedPage')}>
                    sign in
                </button>
            </div>
        </div>
    )
}