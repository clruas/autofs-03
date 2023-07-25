import { useRecoilState } from "recoil"
import { SessionState, UserState } from "../services/store"
import { supabase } from "../services/supabase"
import { useRef, useState } from "react"

function useSession(){
    const [state, setState] = useState('idle')
    const [session, setSession] = useRecoilState(SessionState)
    const [sessionStarted, setSessionStarted] = useRecoilState(false)
    const [user, setUser] = useRecoilState(UserState)
    const timer = useRef()

    async function signOut(){
        await supabase.auth.signOut()
        setSession({})
    }

    async function getUserData(session){
        const { data, error } = await supabase.from('usuarios').select('id, email, tipo, dados->firstName, dados->lastName').eq('id', session.user.id)
        return data[0]
    }

    async function getSession(){
        const { error, data } = await supabase.auth.getSession()
        if(!error){
            const userInfo = await getUserData(data.session)
            setUser(userInfo)
        }
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
    return { session, user, state, getSession, signIn, signOut }
}

export default useSession