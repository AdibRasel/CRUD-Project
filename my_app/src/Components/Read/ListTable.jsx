import React, { useState , useRef } from 'react'
import { useEffect } from 'react'
import { Delete, Read } from '../../APIServices/CRUDService'


import FullScreenLoder from "../Common/FullScreenLoder"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ListTable(props) {

  let [DataList, SetDataList]= useState([]);

  useEffect(()=>{
    
    Loder.classList.remove("Loder_Display")
    // এইখান থেকে ডাটা রিড করা শুরু করবে 
    Read().then((Response)=>{

      SetDataList(Response)
      // console.log(Response)
      Loder.classList.add("Loder_Display")

    })
  },[])

  let Loder = useRef();


  // Delete Button 
  const DeleteItem=(id)=>{

    Delete(id).then((Result)=>{
      if(Result===true){
        // Evry click relode component 
        window.location.reload()
        toast.success("Delete Item Success")
      }
      else{
        toast.error("Delete Fail, Try Again")
      }
    })




  }

  // Update Button 
  const UpdateItem=(id)=>{
    // props.history.push('/Update/'+id);
    // console.log(id);

  }
  // End Update Button 



  if(DataList.length < 0 ){

    return (
      <div>
        {/* <FullScreenLoder /> */}
        {toast.error("No Data fund")}
        {alert("No Data fund")}
      </div>
    )

  }
  else{
    return(


    <div className='container'>
      <h2 className='text-center m-4'>Read Delete </h2>
      <table className='table table-bordered table-striped table-hover' >
          <thead className='thead-light'>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Product Image</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                DataList.map((item, i)=>{
                  return(
                    <tr >
                      <td>{item.ProductName}</td>
                      <td>{item.ProductCode}</td>
                      <td><img src={item.ProductImg} alt="Product Image" className='Productimg_list_red_show' /></td>
                      <td>{item.UnitPrice}</td>
                      <td>{item.Qty}</td>
                      <td>{item.TotalPrice}</td>
                      <td>
                        <button onClick={UpdateItem.bind(this, item._id) } className='btn btn-success mx-1'>Update</button>
                        
                        <button onClick={DeleteItem.bind(this, item._id)} className='btn btn-danger mx-1'>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
          <div className="Loder_Display" ref={(input)=>Loder=input}>
          <FullScreenLoder />
          </div>
      </table>
      <ToastContainer />
    </div>


    )
  }



}

export default ListTable