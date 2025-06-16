import { PAGE } from "@/config/public-page.config";
import { useRouter } from "next/navigation";
import { useState, type KeyboardEvent } from "react";

export function SearchField() {

    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter')return
        if(searchTerm.trim() !== ''){
            router.push(PAGE.SEARCH(searchTerm))
        }
    }
	return (
		<div className='w-1/3'>
			<input
				type='search'
				placeholder='Type to search'
				className='px-4 py-2 outline-none border-none shadow-none w-5/6 bg-transparent'
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
			/>
		</div>
	);
}
