function runTemplateUpdate() {
    console.log(e('f0').innerText)

document.getElementById('principal_right').innerText = htmlDecode(e('f0').innerText)
document.getElementById('primera_right').innerText = htmlDecode(e('f1').innerText)
document.getElementById('segunda_right').innerText = htmlDecode(e('f2').innerText)
document.getElementById('tercera_right').innerText = htmlDecode(e('f3').innerText)

runAnimationIN()
}