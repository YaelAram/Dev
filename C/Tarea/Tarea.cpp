#include <stdlib.h>
#include <fstream>
#include <iostream>
#include <string>
#include <list>

using namespace std;

class ArchivoTexto{
	private:
		string nombre;
		string contenido;
	public:
		ArchivoTexto(string nombre){
			this->nombre = nombre;
			this->contenido = "";
		}
		
		ArchivoTexto(){
		}
		
		void setNombre(string nombre){
			this->nombre = nombre;
		}

		string getNombre(){
			return this->nombre;
		}

		string getContenido(){
			return this->contenido;
		}

		void leer(){
			ifstream archivo;
			string texto;
			archivo.open(nombre.c_str(), ios::in);
	
			if(archivo.fail()){
				cout<<"Error al leer el archivo"<<endl;
				exit(1);
			}
	
			while(!archivo.eof()){
				getline(archivo, texto);
				this->contenido = this->contenido + ((this->contenido == "") ? "" : "\n") + texto;
			}
	
			archivo.close();
			this->contenido.erase(this->contenido.length() - 1, 1);
		}

		void mostrar(){
			cout<<this->contenido<<endl;
		}
};

class AnalizadorTexto{
	protected:
		ArchivoTexto archivo;
	public:
		AnalizadorTexto(ArchivoTexto archivo){
			this->archivo = archivo;
		}
		
		int contarPalabras(){
			int contador = 0;
			bool enPalabra = false;
			string aux = this->archivo.getContenido();
			for(int i = 0 ; i<aux.length() ; i++){
				if(aux[i] != ' ' && aux[i] != '\n' && !enPalabra){
					contador++;
					enPalabra = true;
				}
				else if(aux[i] == ' ' || aux[i] == '\n') enPalabra = false;
			}
	
			return contador;
		}
};

class ContadorPalabras : public AnalizadorTexto{
	public:
		ContadorPalabras(ArchivoTexto archivo) : AnalizadorTexto(archivo){
		}
		
		int contarPalabra(){
			string palabra;
			cout<<endl<<"Ingresa la palabra a buscar: ";
			getline(cin, palabra);
			
			string aux = this->archivo.getContenido();
			int contador = 0;
			size_t posicionStr = 0;
			
			while((posicionStr = aux.find(palabra, posicionStr)) != string::npos){
				contador++;
				posicionStr += palabra.length();
			}
			
			return contador;
		}
		
		int contarPalabra(string palabra){
			string aux = this->archivo.getContenido();
			int contador = 0;
			size_t posicionStr = 0;
			
			while((posicionStr = aux.find(palabra, posicionStr)) != string::npos){
				contador++;
				posicionStr += palabra.length();
			}
			
			return contador;
		}
};

class GeneradorInforme{
	private:
		ArchivoTexto archivo;
	public:
		GeneradorInforme(ArchivoTexto archivo){
			this->archivo = archivo;
		}
		
		void crearInforme(){
			string aux = this->archivo.getContenido();
			AnalizadorTexto analizadorTexto(archivo);
			cout<<endl<<"Informe: "<<endl<<endl;
			cout<<"El documento cuenta con "<<aux.length()<<((aux.length() == 1) ? " caracter" : " caracteres");
			cout<<endl<<"Numero de palabras: "<<analizadorTexto.contarPalabras()<<endl;
		}
		
		int contarParrafos(){
			ContadorPalabras contadorPalabras(archivo);
			int resultado = contadorPalabras.contarPalabra("\n");
			cout<<"Se encontraron "<<resultado<<((resultado == 1) ? " parrafo" : " parrafos")<<endl;
		}
};

class LectorArchivosTexto{
	private:
		ArchivoTexto archivos[5];
		int numeroArchivos;
	public:
		LectorArchivosTexto(){
			this->numeroArchivos = 0;
		}
		
		void agregarArchivo(ArchivoTexto archivo){
			if(this->numeroArchivos == 5){
				cout<<"LectorArvhivosTexto ha llegado a su maxima capacidad (5)"<<endl;
				return;
			}
			this->archivos[this->numeroArchivos] = archivo;
			this->numeroArchivos++;
		}
		
		void agregarArchivo(string archivo){
			ArchivoTexto aux(archivo);
			this->agregarArchivo(aux);
		}
		
		void mostrarArchivos(){
			cout<<endl<<"Lista de archivos: "<<endl<<endl;
			for(int i = 0 ; i<this->numeroArchivos ; i++){
				cout<<"Archivo: "<<this->archivos[i].getNombre()<<endl;
			}
		}
		
		void listarDirectorio(){
			string ruta;
			cout<<endl<<"Ruta (para listar el directorio actual escribir './' o 'actual': ";
			getline(cin, ruta);
			if(ruta == "./" || ruta == "actual") ruta = "";
			string comando = "dir " + ruta;
			system(comando.c_str());
		}
		
		string combinarArchivos(){
			ofstream archivo;
			string nombreArchivo;
			string contenido;
			
			cout<<endl<<"Nombre del archivo: ";
			getline(cin, nombreArchivo);
			
			nombreArchivo += ".txt";
			
			archivo.open(nombreArchivo.c_str(), ios::out);
			
			if(archivo.fail()){
				cout<<"Error al crear el archivo "<<nombreArchivo<<endl;
				exit(1);
			}
			
			for(int i = 0 ; i<this->numeroArchivos ; i++){
				if(this->archivos[i].getContenido() == "") this->archivos[i].leer();
				contenido += this->archivos[i].getContenido() + "\n";
			}
			
			archivo<<contenido;
			
			archivo.close();
			
			return contenido;
		}
};

class GeneradorEstadisticas{
	private:
		ArchivoTexto archivo;
	public:
		GeneradorEstadisticas(ArchivoTexto archivo){
			this->archivo = archivo;
		}
};

int main(int argc, char** argv) {
	// 1. Crear una clase ArchivoTexto
	ArchivoTexto archivo("test1.txt");
	// 2. Metodos para establecer y obtener el nombre
	cout<<"Nombre Erroneo: "<<archivo.getNombre()<<endl;
	archivo.setNombre("test.txt");
	cout<<"Nombre Correcto: "<<archivo.getNombre()<<endl;
	// 3. Leer el contenido del documento y mostrarlo
	cout<<endl<<"Contenido del documento: "<<endl<<endl;
	archivo.leer();
	archivo.mostrar();
	
	// 4. Crear una clase AnalizadorTexto
	AnalizadorTexto analizadorTexto(archivo);
	// 5. Metodo de clase AnalizadorTexto que cuenta la palabras
	cout<<endl<<"Numero de palabras: "<<analizadorTexto.contarPalabras()<<endl;
	
	// 6. Crear clase ContadorPalabras
	int resultado = 0;
	ContadorPalabras contadorPalabras(archivo);
	// 7. Metodo de clase ContadorPalabras que cuenta el numero de veces que aparece una palabra
	resultado = contadorPalabras.contarPalabra();
	cout<<"La palabra se encontro "<<resultado<<((resultado == 1) ? " vez" : " veces")<<endl;
	
	// 8. Crear una clase GeneradorInforme 
	GeneradorInforme informe(archivo);
	informe.crearInforme();
	// 9. Metodo de clase GeneradorInforme que cuenta el numero de parrafos
	informe.contarParrafos();
	
	// 11. Crear una clase LectorArchivosTexto
	LectorArchivosTexto lectorArchivosTexto;
	lectorArchivosTexto.agregarArchivo(archivo);
	lectorArchivosTexto.agregarArchivo("test1.txt");
	lectorArchivosTexto.agregarArchivo("test2.txt");
	lectorArchivosTexto.mostrarArchivos();
	// 12. Metodo de clase LectorArchivosTexto que lista los archivos de un directorio
	lectorArchivosTexto.listarDirectorio();
	// 13. Metodo de clase LectorArchivosTexto que combina los archivos
	string combinacion = lectorArchivosTexto.combinarArchivos();
	cout<<endl<<"Archivos combinados: "<<endl<<endl<<combinacion<<endl;
	
	// 14. Crear un clase GeneradorEstadisticas
	GeneradorEstadisticas generador(archivo);
	
	system("pause");
	return 0;
}

