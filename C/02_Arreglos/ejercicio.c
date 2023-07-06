#include <stdio.h>
#include <conio.h>
#include <string.h>

int main(){
  char nombre1[20], nombre2[20], nombre3[20], nombre4[70];

  printf("Ingresa el nombre 1: ");
  fgets(nombre1, 20, stdin);
  printf("Ingresa el nombre 2: ");
  fgets(nombre2, 20, stdin);
  printf("Ingresa el nombre 3: ");
  fgets(nombre3, 20, stdin);

  nombre1[strlen(nombre1) - 1] = '\0';
  nombre2[strlen(nombre2) - 1] = '\0';
  nombre3[strlen(nombre3) - 1] = '\0';

  if(strcmp(nombre1, nombre2) == -1 && strcmp(nombre1, nombre3) == -1){
    strcpy(nombre4, nombre1);
    strcat(nombre4, ", ");

    if(strcmp(nombre2, nombre3) == -1){
      strcat(nombre4, nombre2);
      strcat(nombre4, ", ");
      strcat(nombre4, nombre3);
    }
    else{
      strcat(nombre4, nombre3);
      strcat(nombre4, ", ");
      strcat(nombre4, nombre2);
    }
  }
  else if(strcmp(nombre1, nombre2) == 1 && strcmp(nombre1, nombre3) == 1){
    if(strcmp(nombre2, nombre3) == -1){
      strcpy(nombre4, nombre2);
      strcat(nombre4, ", ");
      strcat(nombre4, nombre3);
    }
    else{
      strcpy(nombre4, nombre3);
      strcat(nombre4, ", ");
      strcat(nombre4, nombre2);
    }

    strcat(nombre4, ", ");
    strcat(nombre4, nombre1);
  }
  else{
    if(strcmp(nombre2, nombre3) == -1){
      strcpy(nombre4, nombre2);
      strcat(nombre4, ", ");
      strcat(nombre4, nombre1);
      strcat(nombre4, ", ");
      strcat(nombre4, nombre3);
    }
    else{
      strcpy(nombre4, nombre3);
      strcat(nombre4, ", ");
      strcat(nombre4, nombre1);
      strcat(nombre4, ", ");
      strcat(nombre4, nombre2);
    }
  }

  printf("%s", nombre4);

  return 0;
}
