#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define TAM 40

void pedir(char *c);
int len(char *c);

int main(){
  char cadena[TAM];
  char *aux = cadena;

  pedir(cadena);
  printf("\nLongitud: %i\n", len(cadena));

  printf("Caracter: %c\n", *(aux + 5));
  printf("Caracter: %c\n", *(aux + 5 - 2));

  return 0;
}

void pedir(char *c){
  printf("Cadena: ");
  fgets(c, TAM, stdin);

  c[strlen(c) - 1] = '\0';
}

int len(char  *c){
  int lon = 0;
  char *aux = c;

  while(*aux != '\0'){
    lon++;
    // Esta operacion hace avanzar una posicion al puntero (reccore el puntero N bytes dependiendo)
    // el tipo de dato,
    aux++;
  }

  return lon;
}
