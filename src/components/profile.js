import { useHookstate } from "@hookstate/core";



function profile (){
     const {user} = useHookstate(store)
    return 
    <div>Profile</div>
} 
export default Profile; 