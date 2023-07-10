#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define TAM 3

typedef struct libro{
  char nombre[40];
  char autor[50];
  float precio;
} Libro;

Libro crearLibro();
void mostrar(Libro l);
void buscarAutor(Libro libros[TAM]);

int main(){
  Libro libros[TAM];
  for(int i = 0 ; i<TAM ; i++){
    libros[i] = crearLibro();
  }

  for(int i = 0 ; i<TAM ; i++){
    mostrar(libros[i]);
  }

  buscarAutor(libros);

  return 0;
}

Libro crearLibro(){
  Libro l;
  printf("Creando libro...\n\nNombre: ");
  fflush(stdin);
  fgets(l.nombre, 40, stdin);
  printf("Autor: ");
  fflush(stdin);
  fgets(l.autor, 50, stdin);
  printf("Precio: ");
  fflush(stdin);
  scanf("%f", &l.precio);

  l.nombre[strlen(l.nombre) - 1] = '\0';
  l.autor[strlen(l.autor) - 1] = '\0';

  system("cls");

  return l;
}

void mostrar(Libro l){
  printf("Nombre: %s\nAutor: %s\nPrecio: %.2f\n\n", l.nombre, l.autor, l.precio);
}

void buscarAutor(Libro libros[TAM]){
  char autor[50];
  int contador = 0;

  system("cls");
  printf("Buscar autor: ");
  fflush(stdin);
  fgets(autor, 50, stdin);

  autor[strlen(autor) - 1] = '\0';

  for(int i = 0 ; i<TAM ; i++){
    if(strcmp(libros[i].autor, autor) == 0){
      mostrar(libros[i]);
      contador++;
    }
  }

  if(contador == 0) printf("No se encontraron libros de %s", autor);
}
