
    
 let imagesLink=[
    "https://images-static.nykaa.com/uploads/bafe2e5a-c81a-4384-be18-0ce17a57fd0a.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/ad99ac88-7580-4cc2-af63-d3a7040e4d23.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/8db0e2ae-ef39-45f0-b330-a9c5fb393f48.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/420e5dfe-1e4c-48db-8169-fb677365db43.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/5610b423-7c2b-4a2b-b0a5-7badcd888d24.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/b5803dc0-fb0a-4507-9e8a-a88c5ec99868.gif?tr=w-1200,cm-pad_resize",
];



let rightBtn=document.getElementById("btn-right");
let leftBtn=document.getElementById("btn-left");
let crusure=document.getElementById("crusure");

let imageState=0;


rightBtn.addEventListener("click",function(){
    imageState++;
    if (imageState===imagesLink.length){
    imageState=0;
}
    crusure.src=imagesLink[imageState];
});

leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imagesLink.length-1;
    }
    crusure.src=imagesLink[imageState];
});
