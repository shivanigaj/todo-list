let todoList=[
  {
    item: 'Buy Pen',
     dueDate: '8/11/2023'},
      {
        item : 'Go to College',
         dueDate: '8/11/2023'}
        ];
displayItems();

function addTodo(){
let inputElement = document.querySelector('#todo-input');
let dateElement=document.querySelector('#todo-date');
let todoItem= inputElement.value;
let todoDate=dateElement.value;
todoList.push({item:todoItem, dueDate:todoDate});
inputElement.value='';
dateElement.value='';

displayItems();
}

function displayItems(){
  let containerelement = document.querySelector('.todo-container');

  let newhtml='';



  for(let i=0; i<todoList.length; i++){
let{item,dueDate}= todoList[i];

        newhtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button  class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems(); ">Delete</button>
        `; 
  }
  containerelement.innerHTML=newhtml;
}