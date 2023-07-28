import { useRecoilState } from "recoil"
import { supabase } from "../services/supabase"
import { UserState } from "../services/store"

const useAuth = () => {
    const [user, setUser] = useRecoilState(UserState)

    async function signOut(){
        await supabase.auth.signOut()
        setUser({})
    }

    return { user, signOut }
}

export default useAuth