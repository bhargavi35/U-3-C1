let items = JSON.parse(localStorage.getItem("products")) || [];

items.map(function (el,index){
    let div=document.createElement("div")

    let Type=document.createElement("h2")
    Type.innerText=el.type;

    let Description=document.createElement("h4")
    Description.innerText=el.desc;

    let Price=document.createElement("p")
    Price.innerText=`Price:   $${el.price}`;
    Price.style.fontWeight="bold";
    Price.style.color="goldenrod"

    let Image=document.createElement("img")
    Image.src=el.image;

    let removebtn=document.createElement("button")
    removebtn.textContent="Remove";
    removebtn.setAttribute("id","remove_product");
    removebtn.addEventListener("click",function(){
        remove(el,index);
    })
    div.append(Type,Description,Price,Image,removebtn);

    document.querySelector("#all_products").append(div);
})

function remove(el,index){
    // console.log(el)
    items.splice(index,1);
    localStorage.setItem("products",JSON.stringify(items));
    window.location.reload()
}