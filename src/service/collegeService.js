import axios from "axios";

const baseURL='https://collegeapplication-afd4c-default-rtdb.firebaseio.com/Register.json';

class collegeapplication{

   getAllCollegs(){
      return axios.get(baseURL);
   }

   newCollegeRegistartion(college){
     return axios.post(baseURL,college);
   }
   
   getCollegeById(collegeId){
      return axios.get(baseURL+"/"+collegeId);
   }

   deleteCollege(collegeId){
      return axios.delete(baseURL+"/"+collegeId);
   }

}

export default new collegeapplication()
