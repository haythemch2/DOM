let deletebutton = document.getElementsByClassName("delete");
let itemqt = document.getElementsByClassName("quantity");
let totalprice = document.getElementById("total");
let itemprice = document.getElementsByClassName("price");
let heart = document.getElementsByClassName("heart");
let tot=0;

for(i=0;i<heart.length;i++){
    let hrt=heart[i]
    hrt.addEventListener('click',()=>{
    hrt.parentElement.style.color="red";
    console.log(hrt);
    });

}


for(i=0;i<deletebutton.length;i++){
    let btn= deletebutton[i];
    let removeitem= ()=>{
        btn.parentElement.remove();
        calculate();
        };
    deletebutton[i].addEventListener('click',removeitem);
};

function calculate(){
    tot=0;
    for(i=0;i<itemqt.length;i++){
        let price = parseFloat(itemprice[i].innerHTML);
        let qt = itemqt[i].value;
        tot +=(price*qt);
        totalprice.innerHTML=tot;
        itemqt[i].addEventListener('change',calculate);
    }
}
calculate();

