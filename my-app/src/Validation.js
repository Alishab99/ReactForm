function Validation(formData){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone_pattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const pincode_pattern = /^[0-9]{5}$/;

    if(formData.firstName.length === "" ){
        error.firstName = "First name is required"
    }
    if(formData.lastName === ""){
        error.lastName = "Last name is required"
    }
    if(!email_pattern.test(formData.email)){
        error.email = "Input a valid email"
    }
    if(!phone_pattern.test(formData.phoneNumber)){
        error.phoneNumber = "Enter valid number"
    }
    if(formData.address1 === ""){
        error.address1 = "Address line1 is required"
    }
    if(formData.address2 === ""){
        error.address2 = "Address line2 is required"
    }
    if(formData.city === ""){
        error.city = "City is required"
    } 
     if(formData.state === ""){
        error.state = "State is required"
    } 
     if(formData.country === ""){
        error.country = "Country is required"
    }
    if(!pincode_pattern.test(formData.pincode)){
        error.pincode = "Enter valid number"
    }

    return error;
}
export default Validation;