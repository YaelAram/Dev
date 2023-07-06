#include <stdio.h>
#include <conio.h>

#define TAM 5

void pedirNotas(char grupo, float notas[TAM]);
void imprimirNotas(char grupo, float notas[TAM]);
int compararNotas(float notasA[TAM], float notasB [TAM]);

int main(){
  float notasA[TAM], notasB[TAM];
  pedirNotas('A', notasA);
  pedirNotas('B', notasB);
  imprimirNotas('A', notasA);
  imprimirNotas('B', notasB);

  int cmp = compararNotas(notasA, notasB);

  if(cmp > 0) printf("\nEl grupo A obtuvo mejores calificaciones");
  else if(cmp < 0) printf("\nEl grupo B obtuvo mejor calificaciones");
  else printf("\nAmbos grupos empataron");

  return 0;
}

void pedirNotas(char grupo, float notas[TAM]){
  printf("Ingresando notas del grupo %c...\n\n", grupo);
  for(int i = 0 ; i<TAM ; i++){
    printf("Ingresa la nota %i: ", i + 1);
    scanf("%f", &notas[i]);
  }
}

void imprimirNotas(char grupo, float notas[TAM]){
  printf("\n\nNotas del grupo %c...\n\n", grupo);
  for(int i = 0 ; i<TAM ; i++){
    printf("Nota %i: %f\n", i + 1, notas[i]);
  }
}

int compararNotas(float notasA[TAM], float notasB[TAM]){
  float promedioA = 0, promedioB = 0;

  for(int i = 0 ; i<TAM ; i++){
    promedioA += notasA[i];
    promedioB += notasB[i];
  }

  return promedioA - promedioB;
}
