#include <stdio.h>
#include <stdlib.h>

#define TAM 5

void intercambiar(int *a, int *b);
void crearVector(float numeros[TAM]);
void minMax(float numeros[TAM], float *min, float *max);

int main(){
  int a = 5;
  int b = 6;

  printf("Numeros: %i -> %i\n", a, b);
  intercambiar(&a, &b);
  printf("Numeros: %i -> %i\n\n", a, b);

  float numeros[TAM];
  float min, max;

  crearVector(numeros);
  minMax(numeros, &min, &max);
  printf("\nMin: %.3f\nMax: %.3f", min, max);

  return 0;
}

void intercambiar(int *a, int *b){
  int aux = *a;
  *a = *b;
  *b = aux;
}

void crearVector(float numeros[TAM]){
  for(int i=0 ; i<TAM ; i++){
    printf("Ingresa un numero: ");
    scanf("%f", &numeros[i]);
  }
}

void minMax(float numeros[TAM], float *min, float *max){
  *min = numeros[0];
  *max = numeros[0];
  for(int i=1 ; i<TAM ; i++){
    if(numeros[i] < *min) *min = numeros[i];
    if(numeros[i] > *max) *max = numeros[i];
  }
}
