import React, { useRef } from 'react';
import { Create } from '../../APIServices/CRUDService';
import { ErrorTost, isEmty, SuccessTost } from '../../Helper/ValidationHelper';
import FullScreenLoder from '../Common/FullScreenLoder';
import "./CreateForm.css"

// "react-toastify": "^9.1.1" Use 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CreateForm() {

  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};


  let ProductName, ProductCode, ProductImg, UnitPrice, Qty, TotalPrice, Loder = useRef();

  const SabeData =()=>{
    let Name = ProductName.value;
    let Code = ProductCode.value;
    let Image = ProductImg.value;
    let Price = UnitPrice.value;
    let Qty_Qty = Qty.value;
    let Total_Price = Qty_Qty * Price;

    if(isEmty(Name)){
      // ErrorTost("Product Name Require")
      toast.error("Product Name Require")
    }
    else if(isEmty(Code)){
      // ErrorTost("Product Code Require")
      toast.error("Product Code Require")
    }
    else if(isEmty(Image)){
      // ErrorTost("Product Image Require")
      toast.error("Product Image Require")
    }
    else if(isEmty(Price)){
      // ErrorTost("Product Price Require")
      toast.error("Product Price Require")
    }
    else if(isEmty(Qty_Qty)){
      // ErrorTost("Product Qty Require")
      toast.error("Product Qty Require")
    }
    else if(isEmty(Total_Price)){
      // ErrorTost("Total Price Require")
      toast.error("Total Price Require")
    }
    else{

      // Data  Save 
      Loder.classList.remove("Loder_Display")

      Create(Name, Code, Image, Price, Qty_Qty, Total_Price)
        .then((Result)=>{

          if(Result=== true){
            // SuccessTost("Create Product Success")
          toast.success("Success")
            
          Loder.classList.add("Loder_Display")


            ProductName.value= "";
            ProductCode.value= "";
            ProductImg.value= "";
            UnitPrice.value= "";
            Qty.value= "";
            TotalPrice.value= "";

          }
          else{
            alert("Request Fail Try Again")
          }
        })


    }


  }

  return (
    <div>
      <p className='CreateTitle'>Create Prodect</p> 
      <div className="Form">
        <div className="Item">
          <label htmlFor="">Product Name</label> <br />
          <input ref={(input)=>ProductName=input} type="text" placeholder='Product Name' />
        </div>
        <div className="Item">
          <label htmlFor="">Product Code</label> <br />
          <input ref={(input)=>ProductCode=input} type="text" placeholder='Product Code' />
        </div>
        <div className="Item">
          <label htmlFor="">Product Image</label> <br />
          <input ref={(input)=>ProductImg=input} type="text" placeholder='Product Image' />
        </div>
        <div className="Item">
          <label htmlFor="">Price</label> <br />
          <input ref={(input)=>UnitPrice=input} type="text" placeholder='Price' />
        </div>
        <div className="Item">
          <label htmlFor="">Qty</label> <br />
          <input ref={(input)=>Qty=input} type="text" placeholder='Qty' />
        </div>
        <div className="Item">
          <label htmlFor="">Total Price</label> <br />
          <input ref={(input)=>TotalPrice=input} type="text" placeholder='Total Price'  />
        </div>
        <div className="Item">
          <div className="Loder_Display" ref={(input)=>Loder=input}>
          <FullScreenLoder />
          </div>
          <div className="Button">
            <button onClick={SabeData} >Submit</button>
            {/* <button onClick={showToastMessage} >Submit</button> */}
          </div>
        </div>
      </div>
      <ToastContainer />



    </div>
  )
}

export default CreateForm