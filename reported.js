const tempPostApi = "http://localhost:3000/teacherboard"

fetch(tempPostApi)
  .then(response => response.json())
  .then(response => appendReports(response))

function appendReports(reportArray){
  reportArray.forEach(report => {
    let $card = document.createElement('div')
    $card.setAttribute('class', 'card')
    let $studentName = document.createElement('h2')
    $studentName.textContent = report.student
    $card.appendChild($studentName)
    let $teacherDiv = document.createElement('div')
    $teacherDiv.setAttribute('class', 'teacherDiv')
    let $justName = document.createElement('p')
    $justName.textContent = `${report.teacher} : ${report.grade} grade`
    $teacherDiv.appendChild($justName)
    $card.appendChild($teacherDiv)
    let $reason = document.createElement('h3')
    $reason.textContent = report.reason
    $card.appendChild($reason)

    document.querySelector('#appendToMe').appendChild($card)
  })
}




// <h2 class="student"></h2>
// <div class="teacher">
//   <p class="teacherName"></p>
//   <p class="teacherGrade"></p>
// </div>
