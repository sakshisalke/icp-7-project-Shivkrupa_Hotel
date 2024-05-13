let custList=[];
        const listFromLocalStorage = localStorage.getItem("custList");
        if(listFromLocalStorage)
        {
            custList= JSON.parse(listFromLocalStorage);
            render();
        }

        function add()
        {
            const inputCustName= document.getElementById('input-cust-name');
            custList.push(inputCustName.value);

            localStorage.setItem("custList", JSON.stringify(custList));

            inputCustName.value= "";

            render();
        }

        function render()
        {
            const listCustomer= document.getElementById('satisfy-cust-list');
            listCustomer.innerHTML= "";

            for(const listItem of custList)
            {
                listCustomer.innerHTML += `<div class="todo-item">
                    <input type= "checkbox" class="check-box"/>
                    ${listItem}</div>`
            }
        }

        function remove(){
            localStorage.clear(custList);
        }
        setTimeout(remove, 2000);
