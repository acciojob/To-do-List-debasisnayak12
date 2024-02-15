//your code here
let container = document.getElementById('todoList');
let addBtn = document.getElementById('addTodoBtn');

addBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	let inputValue = document.getElementById('newTodoInput').value;
	if(inputValue !== ""){
		let li = document.createElement('li');
		li.textContent = inputValue;
		container.appendChild(li);
	}
	document.getElementById('newTodoInput').value = '';
	
});
