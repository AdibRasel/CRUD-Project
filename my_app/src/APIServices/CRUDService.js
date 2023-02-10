import axios from "axios"

// C = Create 
export function Create(ProductName, ProductCode, ProductImg, UnitPrice, Qty, TotalPrice){
    let URL = "/api/v1/CreateProduct";
    let PostBody = {
        ProductName:ProductName,
        ProductCode:ProductCode,
        ProductImg:ProductImg,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice,
    }
return axios.post(URL, PostBody).then((Response)=>{
        if(Response.status===200){
            return true;
        }else{
            return false
        }
    }).catch((Error)=>{
        console.log(Error)
        return false
    })
}

// R = Read 
export function Read(){
    let URL = "/api/v1/ReadProuct"
    return axios.get(URL).then((Response)=>{
            if(Response.status===200){
                return Response["data"].Data
            }else{
                return false
            }
        }).catch((Error)=>{
            console.log(Error)
            return false
        })
    }

// U = Update 
// export function Update(id){
//     let URL = "/api/v1/UpdateProduct/"+id
//     let PostBody = {
//         ProductName:ProductName,
//         ProductCode:ProductCode,
//         ProductImg:ProductImg,
//         UnitPrice:UnitPrice,
//         Qty:Qty,
//         TotalPrice:TotalPrice,
//     }
    
// return axios.post(URL, PostBody).then((Response)=>{
//         if(Response.status===200){
//             return true
//         }else{
//             return false
//         }
//     }).catch((Error)=>{
//         console.log(Error)
//         return false 
//     })
// }

// D = Delete 
export function Delete(id){
    let URL = '/api/v1/DeleteProuct/'+id
return axios.post(URL).then((Response)=>{
        if(Response.status===200){
            return true
        }else{
            return false
        }
    }).catch((Error)=>{
        console.log(Error);
        return false
    })
}