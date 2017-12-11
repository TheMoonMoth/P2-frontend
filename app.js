const tempTeacherApi = "https://vast-sea-25025.herokuapp.com/teachers"
const tempStudentApi = "https://vast-sea-25025.herokuapp.com/students"
const tempPostApi = "https://vast-sea-25025.herokuapp.com/teacherboard"

fetch(tempTeacherApi)
  .then(response => response.json())
  .then(response => {
    appendTeachers(response)
  })

document.querySelector('#teachDropper').addEventListener('change', function(e){
  fetch(tempTeacherApi)
    .then(response => response.json())
    .then(response => {
      const $teacherSelected = e.target.value
      const $teacherObj = response.filter(teach => teach.name === $teacherSelected)
      const $menu = document.querySelector('#grademenu')
      const $opt = document.createElement('option')

      $menu.innerHTML = ""
      $menu.appendChild($opt)

      for (var i = 0; i < $teacherObj[0].grades.length; i++){
        let $opt = document.createElement('option')
        $opt.setAttribute('value', $teacherObj[0].grades[i])
        $opt.textContent = $teacherObj[0].grades[i]
        $menu.appendChild($opt)
      }
    })
  })

document.querySelector('#grademenu').addEventListener('change', function(e){
  fetch(tempStudentApi)
    .then(response => response.json())
    .then(response => {
      const $gradeSelected = e.target.value
      const $menu = document.querySelector('#studentmenu')
      const $opt = document.createElement('option')

      $menu.innerHTML = ""
      $menu.appendChild($opt)

      switch($gradeSelected){
        case "kindergarten":
          response.kindergarten.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "first":
          response.first.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "second":
          response.second.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "third":
          response.third.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "fourth":
          response.fourth.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "fifth":
          response.fifth.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "sixth":
          response.sixth.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "seventh":
          response.seventh.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "eighth":
          response.eighth.forEach(student => {
            let $opt = document.createElement('option')
            $opt.setAttribute('value', student.name)
            $opt.setAttribute('name', "student-name")
            $opt.textContent = student.name
            $menu.appendChild($opt)
          })
          break
        case "default":
          break
      }
    })
})

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault()
  let form = new FormData(e.target)
  let postObject = {
    "teacher": form.get("teacher"),
    "grade": form.get("grade"),
    "student": form.get("student"),
    "reason": form.get("reason")
  }
  postToRecord(postObject)
  document.querySelector('form').reset()
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

function postToRecord(obj){
  fetch(tempPostApi, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
  .then(response => response.json())
  .then(response => appendMessage(response))
}

function appendMessage(res){
  let $message = document.createElement('h2')
  let $main = document.querySelector('main')
  $message.textContent = res.message
  $main.appendChild($message)
  setTimeout(function(){
    $main.removeChild($main.lastChild)
  }, 2000)
}
