


    let inputValue = document.getElementById('inputValue')
    let addButton = document.getElementById('addListButton')
    let listBody = document.getElementById('unorderListBody')

    document.addEventListener('DOMContentLoaded', getSavedData)
    listBody.addEventListener('click', (e) => {
        const  listItem = e.target;
        
        if(listItem.classList[1] === 'bi-trash-fill'){
            let todo = listItem.parentElement
            let todoParent = todo.parentElement
            let todoGrandParent = todoParent.parentElement
            // todoGrandParent.classList.add('deleteAnimate')
            // todoGrandParent.addEventListener('transitioned' , function(){
            //     todoGrandParent.remove()
            // })
            removedSaveData(todo)
            let toastLiveExample = document.getElementById('liveToastRemove')
            let toast = new bootstrap.Toast(toastLiveExample)
    
            toast.show()

            todoGrandParent.remove()
        }

        if(listItem.classList[1] === 'bi-file-earmark-check-fill'){
            console.log(listItem.classList[1])
            let todo = listItem.parentElement
            let todoParent = todo.parentElement
            let todoGrandParent = todoParent.parentElement

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Done list. Good Job!',
                showConfirmButton: false,
                timer: 2000
              })

            removedSaveData(todo)
            todoGrandParent.remove()
        }
        
    })

    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
      })
    }

    addButton.addEventListener('click', (e) => {
        if(inputValue.value != ""){
            e.preventDefault()

            let todoDiv = document.createElement('div')
            todoDiv.classList.add('todo')
             
            let newList = document.createElement('li')

            newList.classList.add('list-group-item')
            newList.classList.add('todoItem')
            newList.classList.add('d-flex')
            newList.classList.add('justify-content-between')
            newList.classList.add('align-items-center')
            newList.classList.add('mb-1')
            newList.classList.add('border')
            newList.classList.add('rounded')

            newList.innerText = inputValue.value

            todoDiv.appendChild(newList)
            saveTodoLocalSotrage(inputValue.value)

            let listIconsContainer = document.createElement('div')
            listIconsContainer.classList.add('d-flex')
            listIconsContainer.classList.add('justify-content-center')
            listIconsContainer.classList.add('align-items-center')
            newList.appendChild(listIconsContainer)


            let completeIcon = document.createElement('i');
            completeIcon.innerHTML = '<i class="bi bi-file-earmark-check-fill"></i>'
            completeIcon.classList.add('cIcon')
            completeIcon.classList.add('text-success')
            completeIcon.classList.add('me-4')
            completeIcon.classList.add('fs-5')
            listIconsContainer.appendChild(completeIcon) 
            
            let trashIcon = document.createElement('i');
            trashIcon.innerHTML = '<i class="bi bi-trash-fill"></i>'
            trashIcon.classList.add('tIcon')
            trashIcon.classList.add('text-danger')
            trashIcon.classList.add('fs-5')
            listIconsContainer.appendChild(trashIcon) 

            listBody.appendChild(todoDiv)
            inputValue.value = ""
        } 
        
    })

    function saveTodoLocalSotrage(todo){
        let todoArr
        
        if(localStorage.getItem('todoArr') === null){
            todoArr = []
        }
        else{
            todoArr = JSON.parse(localStorage.getItem('todoArr'))
        }
        todoArr.push(todo)
        localStorage.setItem('todoArr', JSON.stringify(todoArr))
    }

    function getSavedData(){
        let todoArr
        
        if(localStorage.getItem('todoArr') === null){
            todoArr = []
        }
        else{
            todoArr = JSON.parse(localStorage.getItem('todoArr'))
        }
        todoArr.forEach(function(todo) {
            let todoDiv = document.createElement('div')
            todoDiv.classList.add('todo')
             
            let newList = document.createElement('li')

            newList.classList.add('list-group-item')
            newList.classList.add('todoItem')
            newList.classList.add('d-flex')
            newList.classList.add('justify-content-between')
            newList.classList.add('align-items-center')
            newList.classList.add('mb-1')
            newList.classList.add('border')
            newList.classList.add('rounded')

            newList.innerText = todo

            todoDiv.appendChild(newList)

            let listIconsContainer = document.createElement('div')
            listIconsContainer.classList.add('d-flex')
            listIconsContainer.classList.add('justify-content-center')
            listIconsContainer.classList.add('align-items-center')
            newList.appendChild(listIconsContainer)


            let completeIcon = document.createElement('i');
            completeIcon.innerHTML = '<i class="bi bi-file-earmark-check-fill"></i>'
            completeIcon.classList.add('cIcon')
            completeIcon.classList.add('text-success')
            completeIcon.classList.add('me-4')
            completeIcon.classList.add('fs-5')
            listIconsContainer.appendChild(completeIcon) 
            
            let trashIcon = document.createElement('i');
            trashIcon.innerHTML = '<i class="bi bi-trash-fill"></i>'
            trashIcon.classList.add('tIcon')
            trashIcon.classList.add('text-danger')
            trashIcon.classList.add('fs-5')
            listIconsContainer.appendChild(trashIcon) 

            listBody.appendChild(todoDiv)
        });
    }

    function removedSaveData(todo){
        let todoArr
        
        if(localStorage.getItem('todoArr') === null){
            todoArr = []
        }
        else{
            todoArr = JSON.parse(localStorage.getItem('todoArr'))
        }

        let todoInedx = todo.children[0].innerText
        todoArr.splice(todoArr.indexOf(todoInedx), 1)
        localStorage.setItem('todoArr', JSON.stringify(todoArr))

        console.log(todo)
    }



