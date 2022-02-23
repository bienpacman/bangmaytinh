function nhapMot(data) {
    document.getElementById('scr').value += data
}
function tinh() {
    document.getElementById('scr').value = eval(document.getElementById('scr').value)
}
function xoaHet() {
    document.getElementById('scr').value = ''
}