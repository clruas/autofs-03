import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }

async function signIn(user, password){
    const rows = await supabase.from('usuarios').select('id, usuario, senha').eq('usuario', user).single()
    if(rows.error){
        return { data: rows.data, error: rows.error }
    } else {
        if(rows.data.senha == password){
            const email = `autofs${rows.data.id}@gmail.com`
            const { data, error } = await supabase.auth.signInWithPassword({
                email, password
            })
            return { data, error }
        } else {
            return { data: null, error: { message: 'A senha informada está incorreta.'}}
        }
    }
}

async function signOut(user, password){
    await supabase.auth.signOut()
}

async function getSession(){
    const { data, error} = await supabase.auth.getSession()
    supabase.auth.onAuthStateChange((event, session) => {
        if (event == 'SIGNED_IN') 
            console.log('SIGNED_IN', session)
    })
    return { data, error }
}

export { signIn, getSession, signOut }