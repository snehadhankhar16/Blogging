import React, { useRef, useState } from 'react'
import Firebase, { storage } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
const AddBlogComp = () => {
    const [obj, setobj] = useState({})
    const [inputs, setinputs] = useState([])
    const[images,setimages]=useState([])
    const[imageserror,setimageserror]=useState(null)
    const[btndisable,setbtndisable]=useState(false)
    const[loader,setloader]=useState(false)
    const[headingimage,setheadingimage]=useState(null)
    const image=useRef()
    const multipleimage=useRef()
    const navigate=useNavigate()
    
    
    const set = (event) => {
        setobj({ ...obj, [event.target.name]: event.target.value ,"Date":Date.now()})
    }
    const Create = () => {
        if (inputs.length < 10) {
            setinputs(inputs => [...inputs, { id: inputs.length + 1 }])
        }
        else {
            alert("No more input")
        }
    }
    const radiocheck = (event)=> {
        setobj({...obj,"Status": event.target.id});
    }
    const set1 = (event,Obj,index  ) =>{
        const result={...Obj,[event.target.name]:event.target.value}
        inputs.splice(index,1,result)                                                                                 // inputs.filter(object=>{
        setinputs([...inputs])                                                                                  // return object.id==Obj.id
    
    }
    const upload=(event)=>{
      const file=event.target.files[0]
      if(!file)return alert ("Image is not uploaded yet")
      
        const ext=file.type.split("/")
        if(ext[0]!=="image") return alert(" Only Image Supported")

        if(ext[1]=="png" ||ext[1]=="jpeg" ||ext[1]=="jpg" ||ext[1]=="PNG" ||ext[1]=="webp")
        {
         return setheadingimage(file)
        }
        else{
           return alert("Only png,Jpeg,jpg,PNG images are supported")
        }
    }
    const uploads=(event)=>{
        const file=event.target.files
        if(!file) return alert("No image is selected")
         
        if(file.length>10)return alert("Only 10 images are allowed")
        let status=images    
        let count=0
        for(let i=0;i<file.length;i++){
            if(status.length>9){
                alert("Only 10 images are allowed")
                break;
            }
            const ext =file[i].type.split("/")
            if(ext[0]!=="image"){
             count++
            }
            else{
             if(ext[1]==="png" || ext[1]==="PNG" || ext[1]==="jpg" || ext[1]==="jpeg"){
                 status.push(file[i])
             }
             else{
             count++  
             }
            } 
        }
        setimages([...status])
        setimageserror(count)
    }
    const Remove=(index)=>{
        images.splice(index,1)
        setimages([...images])
    } 
    async function Submit(e){
       try {
        e.preventDefault()
        setbtndisable(true)
        setloader(true)
        if(!obj.Title ||!obj.Description ||!obj.Heading ||!obj.Author ||!obj.Category ||!obj.Tags ||!obj.Status) return alert("Field is empty")
        if(!headingimage)return alert("Upload headingimage first")
        
        let count=0
        for(let i=0;i<inputs.length;i++){
            if(!inputs[i].Sub_Heading ||!inputs[i].Sub_Heading_Description){
                count=count+1
            }
        }
          if(count>0) return alert("Some field are empty in sub heading part")
          const user=JSON.parse(localStorage.getItem("Users"))
          if(!user) {
             alert ("Unauthorised user")
             window.history.replaceState(null,null,"/Login")
             return navigate("/",{replace:true})}

            //Save heading image in storage(firebase)   
          const fileRef=storage.child(headingimage.name)
          await fileRef.put(headingimage)
          const url=await fileRef.getDownloadURL()
          const path=fileRef.fullPath
          const headobject={url,path}

          let mydata={...obj,"HeadingImage":headobject,"SubHeadingsData":inputs}
           //additional images(optional  for save)
           if(images.length>0){
            let myarray=[]
            for (let j=0;j<images.length;j++){
                const fileRefs= storage.child(images[j].name)
                await fileRefs.put(images[j])
                const urls= await fileRefs.getDownloadURL()
                const paths=fileRefs.fullPath 
                myarray.push({urls,paths}) 
            }
            mydata={...mydata,"Images":myarray}
           }
            Firebase.child("Blogs").child(user).push(mydata,err=>{
            if(err) return alert("Something went wrong. Try again later")
            else return alert("Blog Uploaded")
          })
          setTimeout(() => navigate("/Blogs"),1500);
       } catch (error) {
          return alert("Something went wrong. Try again later")
       }finally{
        setobj({})
        setheadingimage(null)
        setimages([])
        setinputs([]) 
        setbtndisable(false)    
        setloader(false)
       }
    }   
        
    return (
        <div>
            
            <div className="checkout-wrap ptb-100">
                <div className="container">
                    {
                        loader && <div className='preloaders'><div className='loaders'></div></div>
                    }
                    <div className="row">
                        <div className="col-xxl-8 col-xl-7 col-lg-7">
                            <form action="#" className="checkout-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3 className="checkout-box-title">Add your blogs</h3>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="Title" onChange={set} value={obj.Title ? obj.Title : ""} placeholder="Enter your Title" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="Author" onChange={set} value={obj.Author ? obj.Author : ""} placeholder="Enter your Author name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" name="Heading" onChange={set} value={obj.Heading ? obj.Heading : ""} placeholder="Enter your Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name='Description' onChange={set} value={obj.Description ? obj.Description : ""} placeholder='Description'></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="Category" onChange={set} value={obj.Category ? obj.Category : ""} placeholder="Enter Category" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                    <div className="checkout-box" style={{backgroundColor:'transparent',padding:"0px"}}>
                                    <div className="checkout-details" style={{paddingLeft:"20px",paddingRight:"20px"}}>
                                        <div className="bill-details">
                                            <div style={{display:"flex",flexWrap:"nowrap",marginTop:"10px"}} className="select-payment-method">
                                                <div>
                                                    <span style={{fontSize:"20px"}}>Status:</span>
                                                </div>
                                                <div>
                                                    <input type="radio" onClick={radiocheck} readOnly={true} checked={obj.Status=='Active'?true:false} id="Active" name="Status" />
                                                    <label  htmlFor="Active">Active</label>
                                                </div>
                                                <div>
                                                    <input type="radio" onClick={radiocheck} readOnly={true} checked={obj.Status=='In-Active'?true:false} id="In-Active" name="Status" />
                                                    <label  htmlFor="In-Active">In-Active</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="Tags" onChange={set} value={obj.Tags ? obj.Tags : ""} placeholder="Enter your Tags separated by commas" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <a className="btn-two w-100 d-block" onClick={Create}>Create Sub Heading<i className="flaticon-right-arrow" /></a>
                                        </div>
                                    </div>
                                    {
                                        inputs.map(function (input, index) {
                                            return (
                                                <div className='row' key={index}>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="text" name="Sub_Heading" onChange={(e)=>set1(e,input,index)} placeholder={`SubHeading-${input.id}`}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="text" name="Sub_Heading_Description" onChange={(e)=>set1(e,input,index)} placeholder={`SubHeading Description-${input.id}`} />
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                    <div className="col-lg-12 mt-4">
                                        <div className="form-group mb-0">
                                            <button type="submit" disabled={btndisable} onClick={Submit} className="btn-one">Submit<i className="flaticon-right-arrow" /></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                             <div className='col-xxl-4 col-xl-5 col-lg-5'>
                                <div className='slidebar'>
                                    <div className='checkout-box'>
                                        <h4 className='cart-box-title'>Heading image</h4>
                                        <div className='cart-total'>
                                            <div className='cart-total-wrap'>
                                                <img className='img-thumbnail' height={'100%'} width={'100%'} src={headingimage?URL.createObjectURL(headingimage):'/assets/img/images.png'} alt=''/>
                                                </div>
                                                <input type='file' onChange={upload} accept='image/*' hidden ref={image}/>
                                            <a className='btn-two w-100 d-block' onClick={()=>image.current.click()}>Upload Heading image <i className='flaticon-right-arrow' /></a>
                                        </div>
                                    </div>
                                <div className='checkout-box'>
                                  <h4 className='cart-box-title'>Upload more images</h4>
                                  <div className='checkout-details'>
                                   {
                                    images.map(function(Obj,index){
                                        return(
                                            <div key={index} className='myimages'>
                                            <img src={Obj?URL.createObjectURL(Obj):"/assets/img/images.png"} alt=''></img>
                                            <i onClick={()=>Remove(index)}>&times;</i>
                                        </div>
                                        )
                                    })
                                   }
                                   {
                                    imageserror?<p style={{fontSize:"20px",color:"red",textAlign:"center"}}>{imageserror +"files does not support requirement type"}</p>:""
                                   }
                                <div className='bill-details'>
                                 <div className='checkout-footer mt-4'></div>
                                 <input ref={multipleimage} onChange={uploads}accept='image/*' multiple={true} type='file' hidden></input>
                                 <button type='button' onClick={()=>multipleimage.current.click()}  className='btn-two d-block w-100 mt-10'>Upload images<i className='flaticon-right arrow'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
       </div>
    </div>
</div>
)
}
export default AddBlogComp