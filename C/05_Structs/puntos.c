#include <stdio.h>
#include <stdlib.h>

typedef struct punto {
  float x;
  float y;
} Punto;

Punto crearPunto();
void mostrarPunto(Punto p);
int cuandrante(Punto p);

int main(){
  Punto p1 = crearPunto();
  Punto p2 = crearPunto();

  mostrarPunto(p1);
  mostrarPunto(p2);

  printf("X(%f), Y(%f) = Cuandrante %i\n\n", p1.x, p1.y, cuandrante(p1));
  printf("X(%f), Y(%f) = Cuandrante %i\n\n", p2.x, p2.y, cuandrante(p2));

  return 0;
}

Punto crearPunto(){
  Punto p;
  printf("Creando punto...\n\n");
  printf("Coordenada X: ");
  scanf("%f", &p.x);
  printf("Coordenada Y: ");
  scanf("%f", &p.y);

  system("cls");

  return p;
}

void mostrarPunto(Punto p){
  printf("Punto: X(%f), Y(%f)\n\n", p.x, p.y);
}

int cuandrante(Punto p){
  if(p.x > 0){
    if(p.y > 0) return 1;
    else return 4;
  }else{
    if(p.y > 0) return 2;
    else return 3;
  }
}
