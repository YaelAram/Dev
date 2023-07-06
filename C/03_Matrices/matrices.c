#include <stdio.h>
#include <conio.h>

int main(){
  int matriz[2][5];

  printf("Ingresando valores...\n\n");
  for(int i = 0 ; i<2 ; i++){
    for(int j = 0 ; j<5 ; j++){
      printf("Ingresa el valor de la poscion [%i][%i]: ", i, j);
      scanf("%i", &matriz[i][j]);
    }
  }

  printf("\nMostrando valores...\n\n");
  for(int i = 0 ; i<2 ; i++){
    for(int j = 0 ; j<5 ; j++){
      printf("%i  ", matriz[i][j]);
    }
    printf("\n");
  }

  printf("\nModificando Matriz...\n");
  for(int j = 0 ; j<5 ; j++){
    int aux = matriz[0][j];
    matriz[0][j] = matriz[1][j];
    matriz[1][j] = aux;
  }

  printf("\nMostrando valores...\n\n");
  for(int i = 0 ; i<2 ; i++){
    for(int j = 0 ; j<5 ; j++){
      printf("%i  ", matriz[i][j]);
    }
    printf("\n");
  }

  return 0;
}
