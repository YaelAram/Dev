#include <iostream>
#include <ctype.h>

using namespace std;

int main() {
  string cadena = "HolA mUndo12422345";
  int mayusculas = 0;
  int minusculas = 0;
  int digitos = 0;
  int palabras = 0;
  int vocal = 0;
  int otros = 0;

  for(int i = 0 ; i<cadena.length() ; i++) {
    int c = (int)cadena[i];

    if(isdigit(c)) digitos++;
    else if(islower(c)) minusculas++;
    else if(isupper(c)) mayusculas++;
    else if(c == 32){
      palabras++;
      otros++;
    }
    else otros++;

    if(c == 65 || c == 97 || c == 69 || c == 101 || c == 73 || c == 105 || c == 79 || c == 111 || c == 85 || c == 117) vocal++;
  }

  cout<<"Cadena: "<<cadena<<endl;
  cout<<"Longitud total: "<<cadena.length()<<endl;
  cout<<"Mayusculas: "<<mayusculas<<endl;
  cout<<"Minusculas: "<<minusculas<<endl;
  cout<<"Vocales: "<<vocal<<endl;
  cout<<"Digitos: "<<digitos<<endl;
  cout<<"Palabras: "<<(palabras + 1)<<endl;
  cout<<"Otros: "<<otros<<endl;

  system("pause");
  return 0;
}
