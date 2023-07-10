#include <stdio.h>
#include <stdlib.h>

typedef struct punto {
  float x;
  float y;
} Punto;

typedef struct triangulo{
  Punto p1;
  Punto p2;
  Punto p3;
} Triangulo;

Triangulo crearTriangulo();
void mostrar(Triangulo t);

int main(){
  Triangulo t1 = crearTriangulo();
  Triangulo t2 = crearTriangulo();

  mostrar(t1);
  mostrar(t2);

  return 0;
}

Triangulo crearTriangulo(){
  Triangulo t;

  printf("Creando triangulo...\n\nX1: ");
  scanf("%f", &t.p1.x);
  printf("Y1: ");
  scanf("%f", &t.p1.y);
  printf("X2: ");
  scanf("%f", &t.p2.x);
  printf("Y2: ");
  scanf("%f", &t.p2.y);
  printf("X3: ");
  scanf("%f", &t.p3.x);
  printf("Y3: ");
  scanf("%f", &t.p3.y);

  system("cls");

  return t;
}

void mostrar(Triangulo t){
  printf("Triangulo:\n\n");
  printf("X1: %f\nY1: %f\n", t.p1.x, t.p1.y);
  printf("X2: %f\nY2: %f\n", t.p2.x, t.p2.y);
  printf("X3: %f\nY3: %f\n\n", t.p3.x, t.p3.y);
}
