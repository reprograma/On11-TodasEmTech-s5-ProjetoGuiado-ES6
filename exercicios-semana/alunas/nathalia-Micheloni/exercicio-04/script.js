const btnVerify = document.querySelector('input#btnVerify');
const txtCode = document.querySelector('input#txtCode');
btnVerify.addEventListener('click', verifyCode);


export default function verifyCode() {
    if (txtCode.value != '2002' ) {
        alert('[ERRO] Senha inválida. Tente novamente');
        txtCode.value = "";
        txtCode.focus();
    } else if ( txtCode.value == "" ) {
        alert('[ERRO] Insira uma senha e clique em Verificar');
        txtCode.value = "";
        txtCode.focus();
    } else if (txtCode.value == '2002') {
        alert('Acesso Permitido');
    }
}
