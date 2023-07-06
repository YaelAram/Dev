#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct producto{
  int codigo;
  char descripcion[40];
  float precio;
} Producto;

Producto crearProducto();
void mostrarProducto(Producto p);
int cmpProductos(Producto p1, Producto p2);

int main(){
  Producto p1 = crearProducto();
  Producto p2 = crearProducto();

  mostrarProducto(p1);
  mostrarProducto(p2);

  int cmp = cmpProductos(p1, p2);

  if(cmp == 0) printf("Ambos productos tienen el mismo precio $%f", p1.precio);
  else if(cmp > 0) printf("El producto %s es el mas caro $%.2f", p1.descripcion, p1.precio);
  else printf("El producto %s es el mas caro $%.2f", p2.descripcion, p2.precio);

  return 0;
}

Producto crearProducto(){
  Producto p;

  printf("Creando producto...\n\n");
  printf("Codigo: ");
  scanf("%i", &p.codigo);
  printf("Descripcion: ");
  fflush(stdin);
  fgets(p.descripcion, 40, stdin);
  printf("Precio: ");
  scanf("%f", &p.precio);

  p.descripcion[strlen(p.descripcion) - 1] = '\0';

  system("cls");

  return p;
}

void mostrarProducto(Producto p){
  printf("Codigo: %i\nDescripcion: %s\nPrecio: %f\n\n", p.codigo, p.descripcion, p.precio);
}

int cmpProductos(Producto p1, Producto p2){
  return (int)p1.precio - (int)p2.precio;
}
