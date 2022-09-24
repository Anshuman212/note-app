const addBox= document.querySelector(".add-box"),
popupBox= document.querySelector(".popup-box"),
closeIcon= popupBox.querySelector("header i"),
titleTag= popupBox.querySelector("input"),
descTag= popupBox.querySelector("textarea"),
addBtn =popupBox.querySelector("button");

const months=["jan","feb","march","april","may","june","july","aug"
,"july","aug","sept","nov","dec"];


// getting localstorage if exists otherwise null
const notes=JSON.parse(localStorage.getItem("notes")||"[]");

addBox.addEventListener("click",()=>{
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click",()=>{
  popupBox.classList.remove("show");
});

function showNotes(){
  notes.forEach((note) => {
    let litTag=' ';
  });
}
showNotes();


addBtn.addEventListener("click",e  =>{
  e.preventDefault();
  let noteTitle =titleTag.value,
  noteDesc= descTag.value;
  if(noteTitle|| noteDesc){
    let dateObj=new Date(),
    month=months[dateObj.getMonth()],
    day=dateObj.getDate(),
    year=dateObj.getFullYear(); 
    let noteInfo={
      title: noteDesc,description:noteDesc,date:`${month} ${day},${year}`
    }
   
    notes.push(noteInfo);
    //saving to local storage
    localStorage.setItem("notes",JSON.stringify(notes));
    closeIcon.click();

 console.log(noteInfo);
  }
});