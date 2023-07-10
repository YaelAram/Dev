#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define TAM 40

void pedirStr(char *c);
void mostrar(char *c);

int main(){
  char cadena[40];

  pedirStr(cadena);
  mostrar(cadena);
}

void pedirStr(char *c){
  printf("Creando cadena...\n\nCadena: ");
  fgets(c, TAM, stdin);

  c[strlen(c) - 1] = '\0';

  system("cls");
}

void mostrar(char *c){
  printf("Cadena: %s\n\n", c);
}
