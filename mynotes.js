//store notes to localstorage
showNotes();
let addbtn= document.getElementById('addbtn');
addbtn.addEventListener('click',function (e){
   let addtxt= document.getElementById('addtxt');
   let notes= localStorage.getItem('notes');
   if(notes == null){
     notesObj=[];
   }
   else{
      notesObj= JSON.parse(notes);
    
   }
   notesObj.push(addtxt.value);
   localStorage.setItem('notes',JSON.stringify(notesObj));
   addtxt.value='';
   showNotes();
   console.log(notesObj);
});

function showNotes() {
  let notes= localStorage.getItem('notes');
  if(notes == null){
    notesObj=[];
  }
  else{
     notesObj= JSON.parse(notes);
   
  }
  let html='';
 notesObj.forEach(function(element,index){
  html +=` <div class="card notecard  mx-2 my-2 " style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title">Your Note ${index + 1} </h5>
           <p class="card-text"  >${element}</p>
           <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
</div>
</div>`;
 });
 let noteelem= document.getElementById('notes');
 if(notesObj.length !=0){
   noteelem.innerHTML=html;
 }
 else{
   noteelem.innerHTML=`Nothing to show!! use"Add Note section To add a note"`;
 }


}
//funcation delete
function deleteNote(index) {
   console.log('i am deleting',index);
   let notes= localStorage.getItem('notes');
   if(notes == null){
     notesObj=[];
   }
   else{
      notesObj= JSON.parse(notes);
    
   }
   notesObj.splice(index , 1);
   localStorage.setItem('notes',JSON.stringify(notesObj));
   showNotes();

}
let search= document.getElementById('serachTxt');
search.addEventListener('input',function () {
  let inputVal= search.value.toLowerCase();
   //console.log('input evebt fired!!',inputVal);
   let notecards= document.getElementsByClassName('notecard');
   Array.from(notecards).forEach(function (element) {
     let cardtxt= element.getElementsByTagName('p')[0].innerText;
    /*  console.log(cardtxt); */
    if(cardtxt.includes(inputVal)){
      element.style.display='block';
    }
    else{
      element.style.display='none';
    }

   })
});

