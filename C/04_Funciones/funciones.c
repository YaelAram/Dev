#include <stdio.h>
#include <conio.h>
#include <string.h>

int pedirNumero();
void listarNumeros(int);
char pedirCaracter();
void analizarCaracter(char);

int main(){
  listarNumeros(pedirNumero());
  analizarCaracter(pedirCaracter());

  return 0;
}

int pedirNumero(){
  int numero;
  printf("Ingresa un numero: ");
  scanf("%i", &numero);

  return numero;
}

void listarNumeros(int numero){
  if(numero < 1) {
    printf("El numero debe ser mayor o igual a 1");
  }
  else{
    for(int i = 1 ; i<=numero ; i++){
      printf("%i  ", i);
    }
  }
};

char pedirCaracter(){
  char caracter;
  printf("\nIngresa un caracter: ");
  fflush(stdin);
  scanf("%c", &caracter);

  return caracter;
}

void analizarCaracter(char caracter){
  char vocales[] = "AEIOUaeiou";
  if(strchr(vocales, caracter) != NULL) printf("El caracter %c es una vocal", caracter);
  else printf("El caracter %c no es una vocal", caracter);
}
