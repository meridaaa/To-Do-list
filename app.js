const btn = document.querySelector(".add-btn")
var remove = document.querySelectorAll('.remove')
var table = document.querySelector(".table")
var isCompleted = document.querySelector('.isCompleted')
var items = document.querySelectorAll('.items')
var list = document.querySelectorAll('.list')
btn.addEventListener('click', function(){
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    var input = document.getElementById('name').value;
    //adding to row
    var newbtn = document.createElement('button')
    newbtn.appendChild(document.createTextNode(String.fromCharCode(10006)))
    newbtn.classList.add('remove')
    cell.appendChild(newbtn)
    var link = document.createTextNode(input);
    var a = document.createElement('a')
    a.appendChild(link)
    a.href = '#' 
    a.id = 'txt'
    cell.appendChild(a)
    
    // cell.data.href('#')
    row.dataset.href = '#'
    cell.classList.add('items')
    row.classList.add('list')
    //clear input
    document.getElementById('name').value=''
    //calling 
    items = document.querySelectorAll('.items')
    list = document.querySelectorAll('.list')
    remove = document.querySelectorAll('.remove')
    //events on new cell
    // a.addEventListener('click', function () {
    //   cell.classList.add('isCompleted')
    // })
    newbtn.addEventListener('click', function () {
      table.deleteRow(newbtn.parentNode.parentNode.rowIndex)
    })
      const rows = document.querySelectorAll("tr[data-href]")
      rows.forEach(r => {
        r.addEventListener('click', () =>{
          r.classList.add('isCompleted')
        })
      })
})
items.forEach(function(el){
  el.addEventListener('click', function () {
    el.classList.add('isCompleted')
  });
});
remove.forEach(function(el){
  el.addEventListener('click', function (){
    table.deleteRow(el.parentNode.parentNode.rowIndex)
})
})