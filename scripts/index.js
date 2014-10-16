/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function mostraralerta() {
    alert("Hizo Clic!");
}
function hacerclic() {
    var elemento = document.getElementsByTagName('input')[0];
    elemento.addEventListener('click', mostraralerta, false);
}
window.addEventListener('load', hacerclic, false);