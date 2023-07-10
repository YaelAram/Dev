#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define TAM 40

typedef struct producto{
  char nombre[TAM];
  float precio;
} Producto;

Producto* crearProducto();
void mostrarProducto(Producto *p);

int main(){
  Producto *producto = crearProducto();
  mostrarProducto(producto);

  return 0;
}

Producto* crearProducto(){
  Producto *p;
  p = malloc(sizeof(Producto));

  if(p == NULL){
    printf("Error al crear nuevo producto.");
    exit(0);
  }

  printf("Creando producto...\n\nNombre: ");
  fflush(stdin);
  fgets(p->nombre, TAM, stdin);
  printf("Precio: ");
  scanf("%f", &p->precio);

  p->nombre[strlen(p->nombre) - 1] = '\0';

  system("cls");

  return p;
}

void mostrarProducto(Producto *p){
  printf("Nombre: %s\nPrecio: %.2f", p->nombre, p->precio);
}
