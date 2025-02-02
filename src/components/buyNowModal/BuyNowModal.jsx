import {Button, Dialog, DialogBody,} from "@material-tailwind/react";
import {useState} from "react";
const BuyNowModal =({addressInfo,setAddressInfo, buyNowFunction})=>{
    const [open, setOpen] = useState(false); 
    const handleOpen = ()=> setOpen(!open)  //if open ---> true so after clicking become  false and if false---> so it will true
    return(
        <>
        <Button type="button" onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent  dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl">
            Buy Now
        </Button>
        {/*Dialog COmponent is likely a part of a UI library or a custom component designed to create modal dialogs
        This prop controls whether the dialog is visible or not.
        handleOpen -->which is use to handle the opening and closing of the dialog.
        */}
        <Dialog open={open} handler={handleOpen} className="bg-pink-50">
            {/*DialogBody component is nested within the Dialog component.This component is used to define the
            content area of the modal dialog. */}
            <DialogBody className="">
                <div className="mb-3">
                    <input
                    value = {addressInfo.name}
                    onChange = {(e)=>{
                        setAddressInfo({
                            ...addressInfo, //spread operator is used to copy the existing addressInfo object
                            name:e.target.value,
                        })
                    }} type="text" name="name" placeholder="Enter Your Name"
                    className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300">
                    </input>
                </div>
                <div className="mb-3">
                        <input
                            type="text"
                            value = {addressInfo.address}
                            onChange = {(e)=>{
                                setAddressInfo({
                                    ...addressInfo,
                                    address:e.target.value,
                                })
                            }}
                            name="address"
                            placeholder='Enter your address'
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                </div>
                <div className="mb-3">
                        <input
                            type="text"
                            
                            value = {addressInfo.pincode}
                            onChange = {(e)=>{
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode : e.target.value,
                                })
                            }}
                            name="pincode"
                            placeholder='Enter your pincode'
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value = {addressInfo.mobileNumber}
                            onChange = {(e)=>{
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber:e.target.value,
                                })
                            }}
                            type="text"
                            name="mobileNumber"
                            placeholder='Enter your mobileNumber'
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>
                    <div className="">
                    <Button
                type="button"
                onClick={()=>{
                    handleOpen();
                    buyNowFunction();
                }}
                className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
            >
                Buy Now
            </Button>
                    </div>
            </DialogBody>
        </Dialog>
        
        
        
        
        
        </>

        

    )


}
export default BuyNowModal;