import { useRecoilState } from "recoil"
import { UserState } from "../services/store"
import { useNavigate } from "react-router-dom"
import { supabase } from "../services/supabase"

const useSession = () => {
    const [user, setUser] = useRecoilState(UserState)
    const navigate = useNavigate()
    
    async function getUserData(session){
        const { data, error } = await supabase.from('usuarios').select('id, email, tipo, dados->firstName, dados->lastName').eq('id', session.user.id)
        return data[0]
    }

    async function getSession(){
        const { data, error } = await supabase.auth.getSession()
        if (error){
            navigate('/login')
        } else {
            const userInfo = await getUserData(data.session)
            setUser(userInfo)
        }
    }
    return { user, getSession }
}

export default useSession