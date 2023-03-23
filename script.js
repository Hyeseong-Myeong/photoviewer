 // JavaScript 코드
 var photoList = document.querySelector(".photo-list");

 function showPhoto(photoUrl) {
   // 선택한 사진의 경로를 인자로 받아서, 오른쪽의 사진 컨테이너에 보여줍니다.
   var photoContainer = document.getElementById("selected-photo");
   photoContainer.src = photoUrl;

   // 이전에 선택된 사진의 테두리를 제거합니다.
   var selectedPhoto = document.querySelector(".selected");
   if (selectedPhoto) {
     selectedPhoto.classList.remove("selected");
   }

   // 새로 선택한 사진에 테두리를 추가합니다.
   var clickedPhoto = event.target;
   clickedPhoto.classList.add("selected");
 }

const input = document.querySelector('input');
const preview = document.querySelector('.photo-list');
 
input.addEventListener('change', showTextFile);
 
function showTextFile() {
    const selectedFiles = input.files;
    const list = document.createElement('ul');
    preview.appendChild(list);
    
    i = 0;
    for(const file of selectedFiles) {
        fn = file.name;
        if(fn.endsWith(".jpg")||
            fn.endsWith(".jpeg") ||
            fn.endsWith(".png") ||
            fn.endsWith(".gif") ||
            fn.endsWith(".bmp")){
            i++;
            const listItem = document.createElement('li');
            const summary = document.createElement('div');
    
            summary.setAttribute('id', 'img' + i);
    
            summary.textContent = file.webkitRelativePath;
            console.log(file.webkitRelativePath);
            listItem.appendChild(summary);
            listItem.onclick = function () {
                showPhoto(file.webkitRelativePath);
              };
            list.appendChild(listItem);
        }else{
            ;
        }
        
    }
}
