#include <stdio.h>
#include <stdlib.h>

int main(){
  int *tam, *numeros;

  tam = malloc(sizeof(int)); // Asigna memoria

  if(tam == NULL){ // Verifica la asignacion
    printf("Error al asignar variable tam\n");
    exit(0);
  }

  printf("Longitud: ");
  scanf("%i", tam);

  numeros = malloc((*tam) * sizeof(int)); // Asignacion para arreglos

  if(numeros == NULL){
    printf("Error al asignar variable numeros\n");
    exit(0);
  }

  for(int i=0 ; i<(*tam) ; i++){
    printf("Numero %i: ", i + 1);
    scanf("%i", &numeros[i]);
  }

  system("cls");

  printf("Longitud: %i\n\n", *tam);

  for(int i=0 ; i<(*tam) ; i++){
    printf("Numero %i: %i\n", i + 1, numeros[i]);
  }

  free(tam); // Liberar memoria
  free(numeros);

  return 0;
}
