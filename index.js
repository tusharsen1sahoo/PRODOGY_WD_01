window.onscroll=()=>{scrollfun()};
function scrollfun(){
    if(document.body.scrollTop>50|| document.documentElement.scrollTop > 50){
        document.querySelector('.navbar').style.backgroundColor='#042b1e'
    }
    else
    document.querySelector('.navbar').style.backgroundColor='#22db9d'
}
