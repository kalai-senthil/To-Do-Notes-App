const notesApp = angular.module("notesApp",[])
notesApp.controller("maintainNotes",function ($scope){
    $scope.notes = [];
    let noteTitle = null;
    let noteForm = angular.element(document.getElementsByClassName("adding-note-form"));
    let noteFormReset = document.getElementById("add-note-form");
    let addbtn = angular.element(document.getElementsByClassName("Add"));
    let editNoteForm =angular.element(document.querySelector("#edit-note"));
    let editTitle = document.querySelector("#edit-title");
    let editDes = document.querySelector("#edit-des");
    let noteDes = null;
    let noteValue = null;
    let editNote = null;
    let editNoteIndex = null;
    $scope.totalNotes = 0;
    $scope.noteDelete = (i)=>{
        $scope.notes.splice(i,1);
        $scope.totalNotes -= 1;
    }
    $scope.noteSaveCancel = function(){
        noteFormReset.reset();
        addbtn.removeClass("add-animation");
        noteForm.removeClass("form-input");
    }
    $scope.addSimu = function(){
        noteForm.toggleClass("form-input");
        addbtn.toggleClass("add-animation");
    }
    $scope.noteSave = ()=>{
        noteTitle = document.getElementById("notes-title").value;
        noteDes = document.getElementById("notes-des").value;
        if(noteTitle === "")
        noteTitle = "Empty";
        function checkNotes(){
            if(noteDes === '')
            {
                if(noteDes === "")
                alert("Description is empty for the Note and Already Added");
            }
            else{
                changeNoteDetails();
            }
        }
        
        checkNotes();
        function changeNoteDetails(){
            noteValue = {"Title":noteTitle,"Des":noteDes};
            noteFormReset.reset();
            $scope.notes.unshift(noteValue);
            addbtn.removeClass("add-animation");
            noteForm.removeClass("form-input");
            $scope.totalNotes += 1;
        }
}
$scope.editNotes = function(specificIndex){
    console.log($scope.notes[specificIndex])
    editTitle.value  = $scope.notes[specificIndex]["Title"];
    editDes.value  = $scope.notes[specificIndex]["Des"];
    editNoteForm.toggleClass("edit-note");
    editNoteIndex = specificIndex;
}
$scope.replaceButton = function(){
    noteTitle = document.getElementById("edit-title").value;
    noteDes = document.getElementById("edit-des").value;
    editNote = {"Title":noteTitle,"Des":noteDes};
    $scope.notes[editNoteIndex] = editNote;
    editNoteForm.toggleClass("edit-note");
}
$scope.replaceCancelButton = function(){
    editNoteForm.toggleClass("edit-note");
}
})

