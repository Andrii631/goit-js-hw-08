import throttle from "lodash.throttle";
const STORAG_KEY = "feedback-form-state";
let formData = {};
const refs ={
    form: document.querySelector('.feedback-form')
}
refs.form.addEventListener('submit',onFormSubmit);
window.addEventListener('load', onLoad);
refs.form.addEventListener('input',throttle((e)=>{
    const {name, value} = e.target;    
    formData[name] = value.trim();
    localStorage.setItem(STORAG_KEY, JSON.stringify(formData))
}, 500))
function onFormSubmit(evt){
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(STORAG_KEY);
    console.log(formData)
    formData = {};
   
} 
function onLoad(){
    try {
        const saveDate = localStorage.getItem(STORAG_KEY);
        if(!saveDate) return;
        formData = JSON.parse(saveDate);
        console.log(formData)
        Object.entries(formData).forEach(([key , val])=>{
            refs.form.elements[key].value = val;
        })
    } catch (error) {
        console.log(error.message)
    }
}
