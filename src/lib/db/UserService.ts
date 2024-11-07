import BaseService from "./BaseService";

class UserService extends BaseService<'User'> {
 
     createUserIfNotExists = async (email:string, userData:any) => {
     
       const userExists = await this.findUnique({  where: { email }})
       let user=null

        if(!userExists)
        {
         user=await this.create({email,...userData})
        }
      
        return user;
      };
}

export default UserService;