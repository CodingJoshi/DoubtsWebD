{/* <ul class="list-group " id="ulTasks">
    <li class="list-group-item " id="liItem">Todo 1
        <button id="btnTrash">
        <svg   width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        </svg>
        </button> 
    </li>
</ul> */}
$(document).ready(function() {
let ulTasks=$('#ulTasks');
let btnAdd=$('#btnAdd');
let btnClear=$('#btnClear');
let inpTask=$('#inpTask');
btnAdd.click((event)=>{
    if(inpTask.val()==''){
        console.log("err");
        $('#errMsg').css('display','block');
        return;
    }
   $('#errMsg').css('display','none');
    let liItem=$('<li>')
        .attr("id","liItem")
        .addClass("list-group-item")
        .text(inpTask.val())
        .append(
            $('<button>')
            .attr('id','btnTrash')
            .append(
            $('<i>')
            .addClass('fa fa-trash')
            )
        )
    liItem.click(()=>{
        liItem.toggleClass('done');
    })

    btnTrash.click(()=>{
        console.log('clickde');
    })
    
    ulTasks.append(liItem);
    inpTask.val('');
}) 
});