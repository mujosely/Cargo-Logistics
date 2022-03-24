
import axios from "axios";
import store from "store"



const Cargo_URL = "http://127.0.0.1:8000/api/customer/";


var config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": `${store.get("x-auth-token")}`,
  },
};

class Application {
    async createAccount(data) {
        try{
            const response = await axios.post(
                Cargo_URL + "",
              
                data,
                config
            );
            console.log(response)
            return response;
        }
        catch (error){
            console.log(error.response);
            return error.response;
        }
    }


    
  }


export default new Application();
