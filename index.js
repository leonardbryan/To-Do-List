


    let inputValue = document.getElementById('inputValue')
    let addButton = document.getElementById('addListButton')
    let listBody = document.getElementById('unorderListBody')

    addButton.addEventListener('click', (e) => {
        if(inputValue.value != ""){
            e.preventDefault()

            let todoDiv = document.createElement('div')
            todoDiv.classList.add('todo')
            
            let newList = document.createElement('li')

            newList.classList.add('list-group-item')
            newList.classList.add('d-flex')
            newList.classList.add('justify-content-between')
            newList.classList.add('align-items-center')
            newList.classList.add('mb-1')
            newList.classList.add('border')
            newList.classList.add('rounded')

            newList.innerText = inputValue.value

            todoDiv.appendChild(newList)

            let listIconsContainer = document.createElement('div')
            listIconsContainer.classList.add('d-flex')
            listIconsContainer.classList.add('justify-content-center')
            listIconsContainer.classList.add('align-items-center')
            newList.appendChild(listIconsContainer)


            let completeIcon = document.createElement('i');
            completeIcon.innerHTML = '<i class="bi bi-file-earmark-check-fill"></i>'
            completeIcon.classList.add('text-success')
            completeIcon.classList.add('me-4')
            completeIcon.classList.add('fs-5')
            listIconsContainer.appendChild(completeIcon) 
            
            let trashIcon = document.createElement('i');
            trashIcon.innerHTML = '<i class="bi bi-trash-fill"></i>'
            trashIcon.classList.add('text-danger')
            trashIcon.classList.add('fs-5')
            listIconsContainer.appendChild(trashIcon) 

            listBody.appendChild(todoDiv)
            inputValue.value = ""
        }
        
    })
