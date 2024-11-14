import React, { useState } from 'react'

const AddBlogComp = () => {
    const [obj, setobj] = useState({})
    const [inputs, setinputs] = useState([])
    const set = (event) => {
        setobj({ ...obj, [event.target.name]: event.target.value })
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
    console.log(inputs);
    
    return (
        <div>
            <div className="checkout-wrap ptb-100">
                <div className="container">
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
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <a className="btn-two w-100 d-block">Upload Heading image<i className="flaticon-right-arrow" /></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="Tags" onChange={set} value={obj.Tags ? obj.Tags : ""} placeholder="Enter your Tags" />
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

                                    
                                    <div className="col-lg-12">
                                    <div className="checkout-box" style={{backgroundColor:'transparent',padding:"0px"}}>
                                    <div className="checkout-details" style={{paddingLeft:"20px",paddingRight:"20px"}}>
                                        <div className="bill-details">
                                            <div style={{display:"flex",flexWrap:"nowrap",marginTop:"10px"}} className="select-payment-method">
                                                <div>
                                                    <span style={{fontSize:"20px"}}>Status:</span>
                                                </div>
                                                <div>
                                                    <input type="radio" onClick={radiocheck} id="Active" name="Status" />
                                                    <label  htmlFor="Active">Active</label>
                                                </div>
                                                <div>
                                                    <input type="radio" onClick={radiocheck} id="In-Active" name="Status" />
                                                    <label  htmlFor="In-Active">In-Active</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                    <div className="col-lg-12 mt-4">
                                        <div className="form-group mb-0">
                                            <button type="submit" className="btn-one">Submit<i className="flaticon-right-arrow" /></button>
                                        </div>
                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            )
}

            export default AddBlogComp