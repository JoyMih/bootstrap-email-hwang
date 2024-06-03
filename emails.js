// Controls the checkbox effect for "Pick All" Select All button
var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
console.log(checkboxes);

function checkAll(myCheckbox) {
    if (myCheckbox.checked == true) {
        checkboxes.forEach(function(checkbox){
            checkbox.checked = true;
        });
    }
    else{
        checkboxes.forEach(function(checkbox){
            checkbox.checked = false;
        });
    }
}

// Controls the onclick toggle effect for the "Bookmark" or Mark As Important button
function toggleClass(){
    const bookmark = document.getElementById("bookmark");
    bookmark.classList.toggle("mark-important");
}


// Controls the onclick effect that will display an extra icon when it is clicked
changeIcon = (icon) => icon.classList.toggle("bi-check2-square")