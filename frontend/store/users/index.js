import Cookie from "js-cookie"


export const state = ()=>({
    user: null
})

export const mutations = {
    saveUser(state,userData){
        this.state.users.user=userData;
    }
}

export const actions ={
    async createUser({commit,userData}){
        try {
            await this.$axios.$post('/api/Signup',userData)

            const {email,uid} = auth.currentUser;
            const token= await auth.currentUser.getIdToken()
            Cookie.set("access_token",token);
            commit("saveUser",{email,uid})
            console.log(auth)
        } catch (error) {
            throw error
        }
    },

    async singin({commit},userData){
        try {
            
            await this.$axios.$post('/login',userData)
            console.log("asdasd",userData)
              const {email,uid} = auth.currentUser;
              const token= await auth.currentUser.getIdToken()
              Cookie.set("access_token",token);
              commit("saveUser",{email,uid})
              console.log("deneme",auth)
        } catch (error) {
            throw error
        }
    }
}