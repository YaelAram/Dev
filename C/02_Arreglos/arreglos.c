#include <stdio.h>

#define TAM 5

int main(){
	float sueldos[TAM];
	float contador = 0;

	for(int i = 0 ; i<TAM ; i++){
		printf("Ingresa el sueldo %i: ", i + 1);
		scanf("%f", &sueldos[i]);
	}

	for(int i = 0 ; i<TAM ; i++){
		printf("Sueldo %i: %.2f\n", i + 1, sueldos[i]);
		contador += sueldos[i];
	}

	printf("\nSueldo promedio: %f", contador / (float) TAM);

	char palabra[30];
	int total = 0;
	printf("\n\nIngresa una palabra: ");
	fflush(stdin);
	fgets(palabra, 30, stdin);

	for(int i = 0 ; i<30 ; i++){
    if(palabra[i] == 'a' || palabra[i] == 'e' || palabra[i] == 'i' || palabra[i] == 'o' || palabra[i] == 'u') total++;
    if(palabra[i] == '\0') break; // '\0' caracter nulo
	}
	printf("Total de vocales en la palabra '%s': %i", palabra, total);

	return 0;
}

