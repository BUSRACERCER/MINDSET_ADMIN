import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IAdmin } from '../models/IAdmin'

function Navbar(item : {admin :IAdmin}) {
  const navigate = useNavigate()
  
  useEffect(() => {
    if(item.admin){

    }else{
      navigate('/')
    }
  
    
  }, [])
  
    
  const logout = () => {

    
    sessionStorage.removeItem("admin")
    navigate('/')


  }

  return (
    <>
     
      
      
        <div className='row'>
        <div className='col-sm-12'>
        <div style={{marginTop:10, marginBottom:20,backgroundColor:'yellow',textAlign:'center'}}>
           <h2>MEMBERS</h2>
           </div>
           <h3 style={{marginTop:10, marginBottom:20,color:'green',textAlign:'center'}}>FIRSTNAME:<p style={{marginTop:10, marginBottom:20,color:'blue'}}>{item.admin.firstName}</p></h3>
           <h3 style={{marginTop:10, marginBottom:20,color:'green',textAlign:'center'}}>LASTNAME:<p style={{marginTop:10, marginBottom:20,color:'blue'}}>{item.admin.lastName}</p></h3>
           <h3  style={{marginTop:10, marginBottom:20,color:'green',textAlign:'center'}}>USERNAME:<p style={{marginTop:10, marginBottom:20,color:'blue'}}>{item.admin.username}</p></h3>
           <h3  style={{marginTop:10, marginBottom:20,color:'green',textAlign:'center'}}>E-MAIL:<p style={{marginTop:10, marginBottom:20,color:'blue'}}>{item.admin.email}</p></h3>
           <h3 className='body' >GENDER:<p >{item.admin.gender}</p></h3>

        </div>
        </div>
      
    </>
  )
}

export default Navbar