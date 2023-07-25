import { useRecoilState } from "recoil"
import { SessionState } from "../services/store"
import { supabase } from "../services/supabase"
import { useRef, useState } from "react"

function useSession(){
    const [state, setState] = useState('idle')
    const [session, setSession] = useRecoilState(SessionState)
    const timer = useRef()

    async function signOut(){
        await supabase.auth.signOut()
        setSession({})
    }
    
    async function signIn(email, password){
        clearInterval(timer.current)
        setState('checking')
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if(error){
            setState('error')
            timer.current = setTimeout(() => setState('idle'), 5000)
            return { error }
        } else {
            setState('ok')
            setSession(data.session)

            localStorage.setItem('email', email)
            localStorage.setItem('password', password)

            return { data, error }
        }
    }
    return { session, state, signIn, signOut }
}

export default useSession