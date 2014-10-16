/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ver;
function mostrar(dato) {
    obj = document.getElementById("seccion" + dato);
    ver.style.display = 'none';
    obj.style.display = 'block';
    ver = obj;
}

//CLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTES
function valida() {
    var msg = confirm("Esta seguro que los datos son correctos");
    if (msg) {
        document.form1.ncapa.value = '3';
        document.forms.form1.submit();
    }
}
function validaform3() {
    document.form3.ncapa.value = '4';
    document.forms.form3.submit();
}

function conmodbaja(i) {//funcion de boton para ir a formulario de mod. y bajas de clientes
    document.form4.rfc5.value = i;
    document.form4.ncapa.value = '5';
    document.forms.form4.submit();
}
function conmodbajapub(i) {//funcion de boton para ir a formulario de mod. y bajas de clientes
    document.formimagenes.rfc5.value = i;
    document.formimagenes.ncapa.value = '5';
    document.forms.formimagenes.submit();
}
function actualiza() {
    var msg = confirm("Esta seguro que los datos son correctos");
    if (msg) {
        document.form5.ncapa.value = '5';
        document.form5.g.value = 1;
        document.forms.form5.submit();
    }
}
function afoto() {
    var msg = confirm("Esta seguro que los datos son correctos");
    if (msg) {
        document.form5.ncapa.value = '5';
        document.form5.af.value = 1;
        document.forms.form5.submit();
    }
}
function baja() {
    var msg = confirm("Esta seguro que desea eliminarlo");
    if (msg) {
        document.form5.ncapa.value = '5';
        document.form5.b.value = 1;
        document.forms.form5.submit();
    }
}
function hayerror() {
    if (document.form1.error.value != "") {
        alert(document.form1.error.value);
        document.form1.error.value = '';
        //document.form1.focusFirstElement();
    }
}
//FIN CLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTESCLIENTES



//INICIA USUARIOS INICIA USUARIOS INICIA USUARIOS INICIA USUARIOS INICIA USUARIOS INICIA USUARIOS INICIA USUARIOS
function validacu() {
    if (document.formac.password1.value !== document.formac.password2.value) {
        alert("Los password deben ser iguales");
        document.formac.password1.focus();
        return 0;
    }
    var msg = confirm("Esta seguro que los datos son correctos");
    if (msg) {
        document.formac.ncapa.value = '1';
        document.forms.formac.submit();
    }
}
function validaformcu() {//consulta clientes
    document.formcu.ncapa.value = '2';
    document.forms.formcu.submit();
}
function conmodbajacu(i) {//funcion de boton para ir a formulario de mod. y bajas de usuarios
    document.formccu.cuenta.value = i;
    document.formccu.ncapa.value = '6';
    document.forms.formccu.submit();
}
function actualizau() {
    if (document.formmcu.passwordmu.value != document.formmcu.passwordmu2.value) {
        alert("Los password deben ser iguales");
        document.formmcu.passwordmu.focus();
        return 0;
    }
    var msg = confirm("Esta seguro que los datos son correctos");
    if (msg) {
        document.formmcu.ncapa.value = '6';
        document.formmcu.gu.value = 1;
        document.forms.formmcu.submit();
    }
}
function bajau() {
    var msg = confirm("Esta seguro que desea eliminarlo");
    if (msg) {
        document.formmcu.ncapa.value = '6';
        document.formmcu.bu.value = 1;
        document.forms.formmcu.submit();
    }
}




//INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-INICIA-FIN-
function validaindex() {
    var msg = confirm("Esta seguro que los datos son correctos");
    if (msg) {
        document.formindex.ncapa.value = '20';
        document.forms.formindex.submit();
    }
}
function hayerror2() {
    if (document.formindex.error.value != "") {
        alert(document.formindex.error.value);
        document.formindex.error.value = '';
        //document.form1.focusFirstElement();
    }
}
function cerrarsesion() {
    var msg = confirm("Esta seguro de cerrar sesion");
    if (msg) {
        location.href = 'datos.php?ncapa=21';
    }
}