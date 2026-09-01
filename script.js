const dobInput= document.getElementById("birthday");
const btn= document.getElementById("calbtn");
const entry=document.querySelector("span");

btn.addEventListener("click", Calculator);

function Calculator()
{
    const dob = new Date(dobInput.value);
    const today = new Date();

    let diff=today-dob;

    let days = diff/(1000*60*60*24);
    let age= Math.round(days/365);

    entry.textContent=age;


}

