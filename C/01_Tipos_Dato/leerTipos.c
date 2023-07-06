#include <stdio.h>
#include <string.h> // Libreria
#define PI 3.1416 // Macro

int main(){
  // CHAR - 1 Byte
  char a;
  printf("Ingresa un caracter: ");
  fflush(stdin);
  scanf("%c", &a);
  printf("Char: %c\n", a);
  // STRING
  char nombre[20];
  printf("Ingresa tu nombre: ");
  fflush(stdin);
  fgets(nombre, 20, stdin);
  nombre[strcspn(nombre, "\r\n")] = 0;
  printf("Hola %s\n", nombre);
  // SHORT - 2 Bytes - -32,768 a 32,767
  short numero1;
  printf("Ingresa un numero (short): ");
  fflush(stdin);
  scanf("%hd", &numero1);
  printf("Numero 1 (short): %hd\n", numero1);
  // INT - 4 Bytes- -2,147,483,648 a 2,147,483,647
  int numero2;
  printf("Ingresa un numero (int): ");
  fflush(stdin);
  scanf("%i", &numero2);
  printf("Numero 2 (int): %i\n", numero2);
  // Long long Int - 8 Bytes - -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807
  long long int numero3;
  printf("Ingresa un numero (long long int): ");
  fflush(stdin);
  scanf("%lli", &numero3);
  printf("Numero 3 (long long int): %lli\n", numero3);
  // Float - 4 Bytes
  float numero4;
  printf("Ingresa un numero (float): ");
  fflush(stdin);
  scanf("%f", &numero4);
  printf("Numero 4 (float): %f\n", numero4);
  // Double - 8 Bytes
  double numero5;
  printf("Ingresa un numero (double): ");
  fflush(stdin);
  scanf("%lf", &numero5);
  printf("Numero 5 (double): %.9f\n", numero5); // Para mostrar mas de 6 decimales
  printf("%f * %.15f = %.15f", PI, numero5, numero5 * PI);

  return 0;
}
