const tempTeacherApi = "http://localhost:3000/teachers"
const tempStudentApi = "http://localhost:3000/students"

document.querySelector('select').addEventListener('change', function(e){
  fetch(tempStudentApi)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      // appendStudents(response))
    })
  })


fetch(tempTeacherApi)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    appendTeachers(response)
  })


function appendTeachers(array){
  array.forEach(teacher => {
    let $menu = document.querySelector('#teachDropper')
    let $opt = document.createElement('option')
    $opt.setAttribute('value', teacher.name)
    $opt.textContent = teacher.name
    $menu.appendChild($opt)
    })
  }

// function appendStudents(array){
//   array.forEach(grade => )
// }
