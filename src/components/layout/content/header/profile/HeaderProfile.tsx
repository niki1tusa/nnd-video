
import { PAGE } from "@/config/public-page.config"
import { useTypedSelector } from "@/store"
import { LinkButton } from "@/ui/button/LinkButton"
import { LogIn } from "lucide-react"
import { HeaderAvatar } from "./HeaderAvatar"

export const HeaderProfile = () => {
  const {isLoggedIn} = useTypedSelector(state=>state.auth)
  return isLoggedIn? (
<HeaderAvatar/>
  ): <LinkButton href={PAGE.AUTH}>
   <LogIn size={20}/> Auth</LinkButton>
}
