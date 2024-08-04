import BaseService from "./BaseService";

class UserService extends BaseService<'User'> {
 
     createUserIfNotExists = async (userId:string, userData:any) => {
      console.log("user id",userId)
       const userExists = await this.findUnique({  where: { userId }})
       let user=null

        if(!userExists)
        {
         user=await this.create({userId,...userData})
        }
      
        return user;
      };
}

export default UserService;