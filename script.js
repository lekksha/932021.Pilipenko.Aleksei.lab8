document.addEventListener('DOMContentLoaded', function(){
    //event listener to statick element in list of entities
    document.querySelector('.all-entities').querySelector('.delete').addEventListener('click', function(element){
        element.target.parentElement.remove();
    })
    // Save data event listener
    document.querySelector('.save').addEventListener('click', function(){
        let data = "{"
        document.querySelector('.all-entities').querySelectorAll('.entity').forEach(element =>{
            data+=`"${element.querySelector('.left-input').value}" : "${element.querySelector('.right-input').value}",\n`
        })
        data+="}";
        document.querySelector('.answer').textContent = data;;
    });
    //add element function and its event listeners for UP/DOWN/DELETE buttons
    document.querySelector('.add-element').addEventListener('click',function(){
        //add element
        let node = document.querySelector('.entity');
        next_node = node.cloneNode(true);
        next_node.style = "display:block";
        document.querySelector('.all-entities').append(next_node);
        let del_list = document.querySelectorAll('.delete')
        //delete entity event listener
        del_list[del_list.length-1].addEventListener('click',function(element){
            element.target.parentElement.remove();
        })
        // up entity event listener
        let up_list = document.querySelectorAll('.up')
        if(up_list.length == 2){return 0;}// its a check if all entities were deleted and added again, so first entity still has no up event listener
        up_list[up_list.length-1].addEventListener('click', function(element){
            let curr_left = element.target.parentElement.querySelector('.left-input').value;
            let curr_right = element.target.parentElement.querySelector('.right-input').value;
            let upper_left =  element.target.parentElement.previousElementSibling.querySelector('.left-input').value;
            let upper_right = element.target.parentElement.previousElementSibling.querySelector('.right-input').value;
            element.target.parentElement.querySelector('.left-input').value = upper_left;
            element.target.parentElement.querySelector('.right-input').value = upper_right;
            element.target.parentElement.previousElementSibling.querySelector('.left-input').value = curr_left;
            element.target.parentElement.previousElementSibling.querySelector('.right-input').value = curr_right;
        });
        // down entity event listener
        let down_list = document.querySelectorAll('.down')
        down_list[down_list.length-2].addEventListener('click' , function(element){
            let curr_left = element.target.parentElement.querySelector('.left-input').value;
            let curr_right = element.target.parentElement.querySelector('.right-input').value;
            let down_left =  element.target.parentElement.nextElementSibling.querySelector('.left-input').value;
            let down_right = element.target.parentElement.nextElementSibling.querySelector('.right-input').value;
            element.target.parentElement.querySelector('.left-input').value = down_left;
            element.target.parentElement.querySelector('.right-input').value = down_right;
            element.target.parentElement.nextElementSibling.querySelector('.left-input').value = curr_left;
            element.target.parentElement.nextElementSibling.querySelector('.right-input').value = curr_right;
        });
    })
});