const Name = document.querySelector("#Name");
const Email = document.querySelector("#email");
const text = document.querySelector("#text-area")
const Form = document.querySelector("#form");
const thank = document.querySelector(".thank");
 const bol = true;

Form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
};
const EmailValidation = (Element)=>
{
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(Element).toLowerCase());
}


const validateInputs = ()=>
{
    var NameValue = Name.value.trim();
    let error = false;
    const EmailValue = Email.value.trim();
    const textValue = text.value.trim();

    if(NameValue === '')
        {
            setError(Name,"Name is requierd");
            error = true;
        }
        else
        {
            setSuccess(Name);
        };

        if(EmailValue === '')
        {
            setError(Email,"Email is requierd");
            error = true;
        }
        else if(!EmailValidation(EmailValue))
        {
            setError(Email,"Enter a valid email");
            error = true;
        }
        else
        {
            setSuccess(Email);
        };

        if(textValue === "")
        {
            setError(text,"Message is Empty");
            error = true;
        }else if(textValue.length < 10)
        {
            setError(text,"Message is too Poor");
            error = true;
        }else
        {
            setSuccess(text)
        }
        return error;
}
let opensub = () =>
{
    if(!validateInputs())
    {
        window.location.href = "submitpage.html";    
    }else
    {
        console.log("la");
    }
}
module.exports = {name:NameValue};