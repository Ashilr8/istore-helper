const modal=document.getElementById("modal");
const closeBtn=document.getElementById("close");
const qrTitle=document.getElementById("qrTitle");
const qrDiv=document.getElementById("qrcode");

document.querySelectorAll(".qr-card").forEach(card=>{

    card.addEventListener("click",()=>{

        qrDiv.innerHTML="";

        qrTitle.textContent=card.dataset.title;

        new QRCode(qrDiv,{
            text:card.dataset.url,
            width:256,
            height:256
        });

        modal.style.display="flex";

    });

});

closeBtn.onclick=()=>{

    modal.style.display="none";

}

window.onclick=(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

}

document.getElementById("search").addEventListener("keyup",function(){

    const value=this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        card.style.display=
            card.innerText.toLowerCase().includes(value)
            ?"block":"none";

    });

});