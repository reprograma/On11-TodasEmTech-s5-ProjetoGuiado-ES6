// [Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

function senha() {
    let senhas = prompt("Digite a sua senha");
    if (senhas != 2002) {
        alert("Senha Inválida");
        return senha();
    } else {
        alert("Acesso Permitido");
    }
}
senha();