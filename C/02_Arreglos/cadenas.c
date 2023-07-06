#include <stdio.h>
#include <conio.h>
#include <string.h>

int main(){
  char nombre1[20], nombre2[20], nombre3[20], nombre4[42];
  printf("Ingresa el nombre 1: ");
  fflush(stdin);
  fgets(nombre1, 20, stdin);
  printf("Ingresa el nombre 2: ");
  fflush(stdin);
  fgets(nombre2, 20, stdin);

  nombre1[strlen(nombre1) - 1] = '\0'; // strlen devuelve la longitud de la cadena
  nombre2[strlen(nombre2) - 1] = '\0'; // Removemos el \n que introduce la funcion fgets

  printf("%s tiene %i %s \n", nombre1, strlen(nombre1), ((strlen(nombre1) == 1) ? " letra" : " letras"));
  printf("%s tiene %i %s \n", nombre2, strlen(nombre2), ((strlen(nombre2) == 1) ? " letra" : " letras"));

  int resultado = strcasecmp(nombre1, nombre2); // 0 si son iguales, 1 si nombre1 es mayor, -1 si nombre2 es mayor
  printf("El nombre mayor es: %s\n", ((resultado == 0) ? "ambos" : (resultado == 1) ? nombre1 : nombre2));

  strcpy(nombre3, nombre2); // Copia el contenido de un string en otro
  printf("Nombre 3 copia: %s\n", nombre3);

  strcpy(nombre4, nombre1); // Inicializamos nombre4
  strcat(nombre4, " "); // Concatenamos un espacion
  strcat(nombre4, nombre2); // Concatenamos el segundo nombre
  printf("Nombres unidos: %s\n", nombre4);

  printf("Nombre 2 en mayusculas: %s\n", strupr(nombre2)); // Convierte a mayusculas
  printf("Nombre 2 en minusculas: %s\n", strlwr(nombre2)); // Convierte a minusculas
  printf("Nombre 2 invertido: %s\n", strrev(nombre2)); // Invierte la palabra

  return 0;
}
