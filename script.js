const dobInput= document.getElementById("birthday");
const btn= document.getElementById("calbtn");
const entry=document.querySelector("span");

btn.addEventListener("click", Calculator);

function Calculator()
{
    if(dobInput.value==="")
    {
        alert("Please enter your birthday");
    }
    const dob = new Date(dobInput.value);
    const today = new Date();

    const diff=today-dob;

    const days = diff/(1000*60*60*24);
    const age= Math.floor(days/365);

    entry.textContent=age;


}

