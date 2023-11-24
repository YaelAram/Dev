using System;
using System.Linq;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace PuertoSerial
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        /*
            Esta funcion nos permite actualizar la lista de puertos COM disponibles a mostrar
            en el ComboBox
        */
        private void CargarListaPuertos()
        {
            // Obtenemos la lista de puertos COM disponibles
            string[] puertos = System.IO.Ports.SerialPort.GetPortNames();

            // Si la longitud de la lista es igual a cero
            if (puertos.Length == 0)
            {
                // Mostramos un mensaje notificando al usuario que no hay puertos disponibles
                MessageBox.Show("Sin Puertos Disponibles", "Alerta");
                // Deshabilitamos el boton conectar para prevenir errores
                ConectarBtn.Enabled = false;
            }
            // Si no, actualizamos la lista de opciones del ComboBox
            else Puertos.DataSource = System.IO.Ports.SerialPort.GetPortNames();
        }

        // Es funcion se ejecuta mientras la UI se esta inicializando
        private void Form1_Load(object sender, EventArgs e)
        {
            CheckForIllegalCrossThreadCalls = false;

            // Ejecutamos la funcion para cargar la lista de puertos disponibles
            CargarListaPuertos();

            // Establecemos la lista de modos de operacion disponibles
            Modo.DataSource = new string[2] { "Automático", "Manual" };
            // Establecemos la lista de intensidad de brillo del LED
            Intensidad.DataSource = new string[6] { "Apagado", "20%", "40%", "60%", "80%", "100%" };
        }

        // Esta funcion maneja el evento click del boton BUSCAR
        private void BuscarBtn_Click(object sender, EventArgs e)
        {
            // Recargamos la lista de opciones de puertos disponibles
            CargarListaPuertos();
        }

        // Esta funcion maneja el evento click del boton CONECTAR
        private void ConectarBtn_Click(object sender, EventArgs e)
        {
            // Actualizamos el nombre del puerto serial
            PuertoSerial.PortName = Puertos.SelectedItem.ToString();
            // Abrimos la conexion con el puerto
            PuertoSerial.Open();

            // Deshabilitamos el boton CONECTAR (Ya hay una conexion activa)
            ConectarBtn.Enabled = false;
            // Habilitamos el boton DESCONECTAR (Para poder terminar la conexion actual)
            DesconectarBtn.Enabled = true;
            // Deshabilitamos el boton BUSCAR (Ya hay una conexion activa)
            BuscarBtn.Enabled = false;
            // Habilitamos el ComboBox MODO (Para poder elegir el modo de oepracion)
            Modo.Enabled = true;
            // Habilitamos el ComboBox INTENSIDAD (Para poder elegir la intensidad de brillo del LED)
            Intensidad.Enabled = true;
        }

        // Esta funcion maneja el evento click sobre el boton DESCONECTAR
        private void DesconectarBtn_Click(object sender, EventArgs e)
        {
            // Cerramos la conexion actual
            PuertoSerial.Close();

            // Habilitamos el boton CONECTAR (Para poder iniciar una nueva conexion)
            ConectarBtn.Enabled = true;
            // Deshabilitamos el boton DESCONECTAR (No hay una conexion activa)
            DesconectarBtn.Enabled = false;
            // Habilitamos el boton BUSCAR (Para poder actualizar la lista de puertos disponibles, si es necesario)
            BuscarBtn.Enabled = true;
            // Deshabilitamos el ComboBox MODO (No hay una conexion activa)
            Modo.Enabled = false;
            // Deshabilitamos el ComboBox INTENSIDAD (No hay una conexion activa)
            Intensidad.Enabled = false;
        }

        // Esta funcion maneja el evento SelectedValueChanged del ComboBox MODO
        private void Modo_SelectedValueChanged(object sender, EventArgs e)
        {
            // Obtenemos la opcion del modo seleccionado por el usuario
            string modo = Modo.SelectedItem.ToString();

            // Si el puerto serie no tiene una conexion abierta salimos de la funcion
            if (!PuertoSerial.IsOpen) return;

            // Si el modo de operacion seleccionado fue MANUAL
            if (modo == "Manual")
            {
                // Enviamos a traves del puerto serial el comando M
                PuertoSerial.WriteLine("M");
                // Habilitamos el ComboBox Intensidad
                Intensidad.Enabled = true;
            }
            // Si el modo de operacion seleccionado no fue MANUAL
            else
            {
                // Enviamos a traves del puerto serial el comando A
                PuertoSerial.WriteLine("A");
                // Deshabilitamos el ComboBox Intensidad
                Intensidad.Enabled = false;
            }
        }

        // Esta funcion permite manejar el evento SelectedIndexChanged del ComboBox INTENSIDAD
        private void Intensidad_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Si el puerto serie no tiene una conexion abierta salimos de la funcion
            if (!PuertoSerial.IsOpen) return;

            // Enviamos a traves del puerto serial el comando con el indice de la opcion seleccionada
            PuertoSerial.WriteLine(Intensidad.SelectedIndex.ToString());
        }

        // Esta funcion maneja el evento DataReceived del componente PuertoSerial
        private void PuertoSerial_DataReceived(object sender, System.IO.Ports.SerialDataReceivedEventArgs e)
        {
            // Obtenemos la informacion que el PIC16F887 envio
            string mensaje = PuertoSerial.ReadLine();
            /*
                Creamos una expresion regular que nos permite filtrar la informacion enviada por el PIC16F887
                del ruido del puerto serial

                (A|M): El primer caracter indica el modo en el cual se encuentra el PIC16F887
                    A: Automatico
                    M: Manual
                ,: Indica que debe haber una coma ','
                (100|[0-9]{1,2}): A continuacion puede haber un numero 100 o un numero entre el cero y el 99
            */
            Regex ComandoRegex = new Regex(@"(A|M),(100|[0-9]{1,2})");

            // Comprobamos si hay un substring en el string MENSAJE que cumpla con la expresion regular
            if (ComandoRegex.IsMatch(mensaje))
            {
                // Obtenemos el substring del string MENSAJE que cumple con la expresion regular
                string info = ComandoRegex.Match(mensaje).Value;

                // Obtenemos el modo de operacion a partir del primer char del string INFO
                string modo = (info.ElementAt(0) == 'A') ? "Manual" : "Automático";
                // Obtenemos el porcentaje de brillo del LED
                string potencia = info.Split(',').Last();

                // Actualizamos el LABEL que muestra al usuario el modo de operacion del PIC16F887
                ModoLbl.Text = modo;
                // Actualizamos el LABEL que muestra al usuario la potencia de brillo del LED
                LedLbl.Text = potencia + "%";
            }
        }
    }
}
