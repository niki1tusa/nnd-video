import { STUDIO_PAGE } from "@/config/studio-page.config"
import Image from "next/image"
import Link from "next/link"

export const HeaderProfile = () => {
  return (
    <Link href={STUDIO_PAGE.SETTINGS} className="shrink-0">
        {/* auth avatar */}
        <Image src='/uploads/avatars/redgroup.jpg' alt='' width={40} height={40} className="rounded-lg"/>
    </Link>
  )
}
