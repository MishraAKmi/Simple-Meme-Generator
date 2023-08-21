let meme=document.getElementById("meme")
let title=document.getElementById("title")
let getMemeBtn=document.getElementById("get-meme-btn")
//api url
let url=" https://meme-api.com/gimme/";
//Array of yor 
let subreddits=["catmemes","wholesomemes","dogmemes","me_irl"];
let getMeme=()=>{
    let randomSubrddit=subreddits[Math.floor(Math.random()*subreddits.length)];
    //fetch data
    fetch(url+randomSubrddit)
    .then((resp)=> resp.json())
    .then((data)=>{
        
        let memeImg=new Image();
        memeImg.onload=()=>{
            meme.src = data.url;
            title.innerHTML=data.title;
        };
        memeImg.src= data.url;
    });

};
getMemeBtn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme);