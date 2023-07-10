#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define TAM 40

typedef struct producto{
  char nombre[TAM];
  float precio;
} Producto;

// Cantidad
int pedirCantidad();
// Crear
void crearProducto(Producto *p);
Producto* crearProductos(int cantidad);
// Mostrar
void mostrarProductos(Producto *productos, int cantidad);
// Ampliar
void ampliar(Producto *productos, int cantidad, int nuevaCantidad);

int main(){
  int cantidad = pedirCantidad();

  Producto *productos = crearProductos(cantidad);
  mostrarProductos(productos, cantidad);

  int nuevaCantidad = pedirCantidad();

  if(nuevaCantidad > cantidad){
    ampliar(productos, cantidad, nuevaCantidad);
    mostrarProductos(productos, nuevaCantidad);
  }

  return 0;
}

int pedirCantidad(){
  int cantidad;

  printf("Numero de productos: ");
  scanf("%i", &cantidad);
  system("cls");

  return cantidad;
}

void crearProducto(Producto *p){
  printf("Nombre: ");
  fflush(stdin);
  fgets(p->nombre, TAM, stdin);
  printf("Precio: ");
  scanf("%f", &p->precio);

  p->nombre[strlen(p->nombre) - 1] = '\0';

  system("cls");
}

Producto* crearProductos(int cantidad){
  Producto *productos;
  productos = malloc(cantidad * sizeof(Producto));

  if(productos == NULL){
    printf("Error al crear variable productos\n");
    exit(0);
  }

  for(int i=0 ; i<cantidad ; i++){
    printf("Creando producto %i...\n\n", i + 1);
    crearProducto(&productos[i]);
  }

  return productos;
}

void mostrarProductos(Producto *productos, int cantidad){
  for(int i=0 ; i<cantidad ; i++){
    printf("Producto %i: %s - $%.2f\n\n", i + 1, productos[i].nombre, productos[i].precio);
  }
}

void ampliar(Producto *productos, int cantidad, int nuevaCantidad){
  productos = realloc(productos, nuevaCantidad * sizeof(Producto));

  for(int i=cantidad ; i<nuevaCantidad ; i++){
    printf("Creando producto %i...\n\n", i + 1);
    crearProducto(&productos[i]);
  }
}
