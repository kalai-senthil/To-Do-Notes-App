var toDoApp = angular.module("toDoApp",[])
toDoApp.controller("maintaintoDo",function($scope)
{
    $scope.lists = [];
    $scope.remlists = [];
    $scope.userName = " "+ "User"
    let notification = angular.element(document.querySelectorAll(".noti"));
    let inputform = angular.element(document.querySelector("#username-place"));
    let inputSection= angular.element(document.querySelector(".user-name"));
    let usernameform = document.querySelector("#usernameform");
    let username= document.querySelector("#username");
    $scope.inputForm = function(){
        inputform.addClass("form-transition");
        username.classList = "input-transition";
    }
    $scope.checkNameadd = function(e){
        if(e.code === "Enter"){
            $scope.nameSaving();
        }
    }
    $scope.nameSaving = ()=>{
        $scope.userName = " " + username.value;
        inputSection.removeClass("user-name");
        usernameform.reset();
    }
    function checkNull(){
        if($scope.lists.length === 0)
        $scope.presentNone = true;
        else
        $scope.presentNone = false;
        }
    function checkNullFinished(){
        if($scope.remlists.length === 0)
        $scope.finishedValueNone = true;
        else
        $scope.finishedValueNone = false;
        }
    checkNull();
    checkNullFinished();
    $scope.deletePenTask = function(i){
        $scope.lists.splice(i,1);
        checkNull();
        checkNullFinished();
 alert("Task Deleted")

    }
    $scope.deleteAllFin = ()=>{
        $scope.remlists = [];
        checkNull();
        checkNullFinished();
alert("All Tasks Deleted")
    }
    $scope.finDel = (inDEX) =>{
        $scope.remlists.splice(inDEX,1);
        checkNull();
        checkNullFinished();
alert("Task Deleted")
    }
    $scope.check = function(ch)
    {
        $scope.remlists.unshift($scope.lists[ch]);
        $scope.lists.splice(ch,1);
        checkNull();
        checkNullFinished();
    }
    $scope.checkadd = function(e){
        if(e.code === "Enter")
        {
            $scope.add();
        }
    }
    $scope.add = function (){
        let tasks = document.getElementById("tasks").value;
        let empty = tasks === "";
        let present = false;
        for(let i = 0;i < $scope.lists.length;i++){
            if(tasks === $scope.lists[i])
                {
                    present = true;
                    break;
                }
            } 
        if(!empty)
        {
            if(present === false)
            {
                $scope.lists.unshift(tasks);
                document.getElementById("tasks-add").reset();
                checkNull();
                checkNullFinished();
            }
            else
        alert("Task Already Added");
        }
        else
        alert("Task is Empty");
        
    }
})
