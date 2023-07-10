#include <stdlib.h>
#include <stdio.h>

int main(){
  int a = 1;
  float b =2.6;
  char c = 'W';
  double d, e;

  int *pA = &a; // Definicion <tipo> *<nombreApuntador> crea un apuntador del <tipo>
  float *pB = &b; // Operador & devuelve la direccion en memoria
  char *pC = &c;

  // *<nombreApuntador> devuelve el valor almacenado en esa direccion en memoria
  printf("Direccion en memoria: %p - Valor: %i\n", pA, *pA); // %p imprime hexadecimales
  printf("Direccion en memoria: %p - Valor: %f\n", pB, *pB);
  printf("Direccion en memoria: %p - Valor: %c\n", pC, *pC);

  // Inicializar una variable usando un apuntador
  double *pD = &d;
  // Usando el operador <=> y accediendo al valor podemos asignar un valor a la variable
  *pD = 100.2356;
  // Usando solo el nombre de la variable apuntador podemos asignarle una nueva direccion
  pD = &e;
  *pD = 98.6574;
  // pD contiene la direccion de memoria de <e>, si imprimimos <e> y accdemos al valor
  // que apunta pD ambos nos mostraran el mismo valor
  printf("D: %lf\nE: %lf\nE (apuntador): %lf", d, e, *pD);

  return 0;
}
