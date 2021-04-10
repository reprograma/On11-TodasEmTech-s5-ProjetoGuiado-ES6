/*Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, 
quantos valores digitados foram positivos e quantos valores digitados foram negativos.*/

    let num =[5],g,h,p,k,i;
    g = h = p = k = 0;
for (i = 0; i < 5; i++)
    console.log("%d",num[i])
        if(num[i]%2 == 0)
            g++;
        else
            h++;
        if(num[i]>0)
            p++;
        else if(num[i]<0)
            k++;

console.log("%d valor(es) par(es)\n%d valor(es) impar(es)\n%d valor(es) positivo(s)\n%d valor(es) negativo(s)\n", e, o, p, n);
    return 0;
