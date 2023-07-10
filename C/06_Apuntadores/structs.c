#include <stdlib.h>
#include <stdio.h>
#include <string.h>

typedef struct pais{
  char nombre[40];
  int numHab;
} Pais;

void crearPais(Pais *p);
void mostrarPais(Pais *p);

int main(){
  Pais p1, p2, p3;

  crearPais(&p1);
  crearPais(&p2);
  crearPais(&p3);

  mostrarPais(&p1);
  mostrarPais(&p2);
  mostrarPais(&p3);

  return 0;
}

void crearPais(Pais *p){
  printf("Creando pais...\n\nNombre: ");
  fflush(stdin);
  // Con punteros a structs se usa el operador -> para acceder y establecer sus atributos
  fgets(p->nombre, 40, stdin);
  printf("Numero de habitantes: ");
  scanf("%i", &(p->numHab));

  p->nombre[strlen(p->nombre) - 1] = '\0';

  system("cls");
}

void mostrarPais(Pais *p){
  printf("Nombre: %s\nNumero de habitantes: %i\n\n", p->nombre, p->numHab);
}
