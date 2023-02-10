class ValidationHelper {
    
    isEmty(value){
        if(value.length===0){
            return true
        }else{
            return false
        }
    }

    SuccessTost(msg){
        alert(msg)
    }


    ErrorTost(msg){
        alert(msg)
    }



}

export const {isEmty, SuccessTost, ErrorTost}=new ValidationHelper();