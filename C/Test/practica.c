#include <stdio.h>
#define IZQUIERDA 2.04
#define DERECHA -2.056451

int main() {
  int potencia = 0;
  int adc;

  for(adc = 0 ; adc<256 ; adc++) {
    if (adc >= 0 && adc <= 124) {
      potencia = 255 + (DERECHA * adc);
      printf("Sentido: Der. -> \n");
      printf("ADC: %i \n", adc);
      printf("Potencia: %i \n\n", potencia);
    }
    else if (adc >= 125 && adc <= 129) {
      potencia = 0;
      printf("Motor Detenido \n");
      printf("ADC: %i \n", adc);
      printf("Potencia: %i \n\n", potencia);
    }
    else if (adc >= 130 && adc <= 255) {
      potencia = IZQUIERDA * (adc - 130);
      printf("Sentido: Izq. <- \n");
      printf("ADC: %i \n", adc);
      printf("Potencia: %i \n\n", potencia);
    }
  }

  return 0;
}
