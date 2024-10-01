document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');//add task
    const element = document.getElementById('input1');//input task
    const button2 = document.getElementById('button2');//submit task
    const div2 = document.getElementById('div2');
    const orderedlist1=document.getElementById('orderedlist1');//order lists
    const tickbutton=document.getElementById('tickbutton');//tick button
    const button3=document.getElementById('button3');//new list
    const inputdate=document.getElementById('inputdate');//date input
    const para1=document.getElementById('para1');//enter the date
    const button4=document.getElementById('button4');//submit date
    const div3=document.getElementById('div3');
    const button5=document.getElementById('button5');//end list
    const button6=document.getElementById('button6');//update list
    
    button3.addEventListener('click',function(){
        inputdate.removeAttribute('hidden');
        para1.removeAttribute('hidden');
        para1.classList.add('paras');
        button4.removeAttribute('hidden');
    })
    button4.addEventListener('click',function(){
        const value=inputdate.value.trim();
        const p=document.createElement('p');
        p.id='inputpara';
        p.textContent=value;
        div3.append(p);
        inputdate.setAttribute('hidden','True');
        button3.setAttribute('hidden','True');
        para1.setAttribute('hidden','True');
        button1.removeAttribute('hidden');
        button4.setAttribute('hidden','True');
        button5.removeAttribute('hidden')
    })

    // Show the input field and submit button when "Add task" is clicked
    button1.addEventListener('click', function() {
        element.removeAttribute('hidden');
        button1.setAttribute('hidden', 'true');
        button2.removeAttribute('hidden');
        element.focus(); // Focus on the input field
    });

    // Add task to the list when "Submit task" is clicked
    button2.addEventListener('click', function() {
        const value = element.value.trim(); // Get the value and trim whitespace
        if (value) { // Check if the input is not empty
            const li = document.createElement('li');
            /*li.classlist.add('ulist');*/
            li.textContent = value; // Set the text content of the paragraph
            li.append(tickbutton);
            orderedlist1.append(li); // Append the new paragraph to div2
            element.value = ''; // Clear the input field
            element.setAttribute('hidden','True');
            button2.setAttribute('hidden','True');
            button1.removeAttribute('hidden');
        }
    });
    button5.addEventListener('click',function(){
        button1.setAttribute('hidden','True');
        button5.setAttribute('hidden','True');
        button3.removeAttribute('hidden');
        button6.removeAttribute('hidden');
    })



    button6.addEventListener('click', function() {
        // Create "Mark Done" and "Delete Task" buttons
        const markDoneButtons = document.querySelectorAll('.mark-done-button');
        const deleteButtons = document.querySelectorAll('.delete-button');

        // If buttons already exist, remove them
        markDoneButtons.forEach(btn => btn.remove());
        deleteButtons.forEach(btn => btn.remove());

        // Add Mark Done and Delete buttons next to each list item
        orderedlist1.querySelectorAll('li').forEach((li) => {
            const markDoneButton = document.createElement('button');
            markDoneButton.textContent = 'Mark Done';
            markDoneButton.classList.add('mark-done-button');
            li.appendChild(markDoneButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Task';
            deleteButton.classList.add('delete-button');
            li.appendChild(deleteButton);

            
            markDoneButton.addEventListener('click', function() {
                li.style.color = 'rgb(71, 212, 42)'; // Change color to green
                markDoneButton.setAttribute('disabled', 'true'); 
            });

            
            deleteButton.addEventListener('click', function() {
                li.remove(); // Remove the task from the list
            });
        });
    });
});