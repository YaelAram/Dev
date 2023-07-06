#include <stdio.h>
#include <conio.h>
#include <string.h>

int main(){
  char nombres[5][20];
  char nombreMenor[20];

  printf("Ingresando valores...\n\n");
  for(int i = 0 ; i<5 ; i++){
    printf("Nombre %i: ", i + 1);
    fgets(nombres[i], 20, stdin);
  }

  printf("\nMostrando valores...\n\n");
  for(int i = 0 ; i<5 ; i++){
    printf("Nombre %i: %s", i + 1, nombres[i]);
  }

  strcpy(nombreMenor, nombres[0]);

  for(int i = 1 ; i<5 ; i++){
    if(strcmp(nombreMenor, nombres[i]) > 0) strcpy(nombreMenor, nombres[i]);
  }

  printf("\nEl nombre menor es: %s", nombreMenor);

  return 0;
}
