using System;
using System.Linq;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace ProyectoControl
{
    public partial class Form1 : Form
    {
        // Creamos la lista con las opciones del Combo Box que nos permite elegir el modo de operacion del PIC16F887
        private readonly string[] modos = { "Automático", "Manual" };
        // Creamos la lista con la opciones del Combo Box que nos permite elegir el modo de operacion del Aire Acondicionado
        private readonly string[] aireModos = { "Calentar", "Enfriar" };
        // Creamos la lista con la opciones del Combo Box que nos permite elegir el modo de operacion del Humidificador
        private readonly string[] humModos = { "Subir Humedad", "Bajar Humedad" };
        // Creamos la lista con la opciones del Combo Box que nos permite encender o apagar un dispositivo
        private readonly string[] dispositivoEstados = { "Apagado", "Encendido" };
        // Creamos la lista con las opciones del Combo Box que nos permite establecer una nueva temperatura ideal
        private readonly string[] tempIdeales = { "5°C", "10°C", "15°C", "20°C", "25°C", "30°C", "35°C", "40°C", "45°C" };
        // Creamos la lista con las opciones del Combo Box que nos permite establecer una nueva humedad ideal
        private readonly string[] humIdeales = { "25%", "30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%" };

        private readonly string COM_AUTOMATICO = "A"; // Activa el modo Automatico
        private readonly string COM_MANUAL = "M"; // Activa el modo Manual
        private readonly string COM_ESTATUS = "S"; // Solicita al PIC16F887 su estado, las mediciones del sensor y el de los actuadores

        private readonly string COM_AIRE_CALENTAR = "B"; // Configura el aire acondicionado en modo Calentar
        private readonly string COM_AIRE_ENFRIAR = "C"; // Configura el aire acondicionado en modo Enfriar
        private readonly string COM_AIRE_ENCENDER = "D"; // Enciende el aire acondicionado
        private readonly string COM_AIRE_APAGAR = "E"; // APaga el aire acondicionado

        private readonly string COM_HUM_SUBIR = "F"; // Configura el humidificador para que eleve la humedad
        private readonly string COM_HUM_BAJAR = "G"; // Configura el humidificador para que baje la humedad
        private readonly string COM_HUM_ENCENDER = "H"; // Enciende el humidificador
        private readonly string COM_HUM_APAGAR = "I"; // Apaga el humidificador

        // Este arreglo contiene los comandos que permiten establecer una nueva temperatura ideal
        private readonly string[] tempIdealesCom = { "a", "b", "c", "d", "e", "f", "g", "h", "i" };
        // Este arreglo contiene los comandos que permiten establecer una nueva humedad ideal
        private readonly string[] humIdealesCom = { "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v" };

        public Form1()
        {
            InitializeComponent();
        }

        // Esta funcion nos permite actualizar el Combo Box con los puertos disponibles
        private void CargarPuertos()
        {
            // Obtenemos los puertos disponibles
            string[] puertos = System.IO.Ports.SerialPort.GetPortNames();

            if (puertos.Length == 0) // Si la lista de puertos esta vacia
            {
                ConectarBtn.Enabled = false; // Deshabilitamos el boton Conectar
                MessageBox.Show("Sin puertos disponibles", "Alerta"); // Informamos al usuario que no hay puertos disponibles
            }
            else // La lista de puertos no esta vacia
            {
                ConectarBtn.Enabled = true; // Habilitamos el boton Conectar
                PuertosComboBox.DataSource = puertos; // Actualizamos la lista de opciones del Combo Box
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            CheckForIllegalCrossThreadCalls = false;
            CargarPuertos(); // Cargamos la lista con los puertos disponibles

            ModoComboBox.DataSource = modos; // Inicializamos el Combo Box con la lista de modos

            HumidificadorEstadoComboBox.DataSource = dispositivoEstados; // Inicializamos el Combo Box con la lista de estados
            HumidificadorModoComboBox.DataSource = humModos; // Inicializamos el Combo Box con la lista de modos del humidificador

            AireEstadoComboBox.DataSource = dispositivoEstados; // Inicializamos el Combo Box con la lista de estados
            AireModoComboBox.DataSource = aireModos; // Inicializamos el Combo Box con la lista de modos del aire acondicionado

            HumedadIdealComboBox.DataSource = humIdeales; // Inicializamos el Combo Box con la lista de humedades ideales
            TemperaturaIdealComboBox.DataSource = tempIdeales; // Inicializamos el Combo Box con la lista de temperaturas ideales
        }

        private void ConectarBtn_Click(object sender, EventArgs e)
        {
            // Actualizamos el nombre del puerto con el de la opcion seleccionada del Combo Box
            PuertoSerial.PortName = PuertosComboBox.SelectedItem.ToString();
            PuertoSerial.Open(); // Iniciamos una conexion con el puerto

            EstatusLabel.Text = "Conectado"; // Mostramos al usuario el nuevo estatus del puerto
            ConectarBtn.Enabled = false; // Deshabilitamos el boton Conectar (Ya hay una conexion activa)
            DesconectarBtn.Enabled = true; // Habilitamos el boton Desconectar (Para poder terminar la conexion)
            RecargarBtn.Enabled = false; // Deshabilitamos el boton Recargar (Ya hay una conexion activa)

            ModoComboBox.Enabled = true; // Habilitamos el Combo Box que permite cambiar el modo de operacion del PIC16F887
            HumedadIdealComboBox.Enabled = true; // Habilitamos el Combo Box que permite cambiar la humedad ideal
            TemperaturaIdealComboBox.Enabled = true; // Habilitamos el Combo Box que permite cambiar la temperatura ideal

            Temporizador.Start(); // Iniciamos el temporizador
        }

        private void DesconectarBtn_Click(object sender, EventArgs e)
        {
            PuertoSerial.Close(); // Cerramos la conexion con el puerto serial

            EstatusLabel.Text = "Desconectado"; // Mostramos el nuevo estatus del puerto
            ConectarBtn.Enabled = true; // Habilitamos el boton Conectar
            DesconectarBtn.Enabled = false; // Deshabilitamos el boton Desconectar
            RecargarBtn.Enabled = true; // Habilitamos el boton Recargar

            // Las siguientes lineas se encargar en restablecer el estado por default de la interfaz
            ModoComboBox.SelectedIndex = 0;
            HumedadIdealComboBox.SelectedIndex = 0;
            TemperaturaIdealComboBox.SelectedIndex = 0;

            ModoComboBox.Enabled = false;
            HumedadIdealComboBox.Enabled = false;
            TemperaturaIdealComboBox.Enabled = false;

            HumidificadorEstadoComboBox.SelectedIndex = 0;
            HumidificadorModoComboBox.SelectedIndex = 0;
            AireEstadoComboBox.SelectedIndex = 0;
            AireModoComboBox.SelectedIndex = 0;

            HumidificadorEstadoComboBox.Enabled = false;
            HumidificadorModoComboBox.Enabled = false;
            AireEstadoComboBox.Enabled = false;
            AireModoComboBox.Enabled = false;

            Temporizador.Stop(); // Detenemos el temporizador
        }

        private void RecargarBtn_Click(object sender, EventArgs e)
        {
            CargarPuertos(); // Recargamos la lista de puertos disponibles
        }

        private void ModoComboBox_SelectedValueChanged(object sender, EventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay un conexion activa salimos de la funcion

            string modo = ModoComboBox.SelectedItem.ToString(); // Obtenemos el modo seleccionado del Combo Box

            if (modo == "Manual") // Si el modo Manual es seleccionado
            {
                PuertoSerial.WriteLine(COM_MANUAL); // Enviamos el comando al PIC16F887

                // Deshabilitamos los controles del modo Automatico
                HumedadIdealComboBox.Enabled = false;
                TemperaturaIdealComboBox.Enabled = false;

                // Habilitamos los controles del modo Manual
                HumidificadorEstadoComboBox.Enabled = true;
                HumidificadorModoComboBox.Enabled = true;
                AireEstadoComboBox.Enabled = true;
                AireModoComboBox.Enabled = true;
            }
            else
            {
                PuertoSerial.WriteLine(COM_AUTOMATICO); // Enviamos el comando al PIC16F887

                // Habilitamos los controles del modo Automatico
                HumedadIdealComboBox.Enabled = true;
                TemperaturaIdealComboBox.Enabled = true;

                // Deshabilitamos los controles del modo Manual
                HumidificadorEstadoComboBox.Enabled = false;
                HumidificadorModoComboBox.Enabled = false;
                AireEstadoComboBox.Enabled = false;
                AireModoComboBox.Enabled = false;
            }
        }

        private void HumedadIdealComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay una conexion activa salimos de la funcion

            int index = HumedadIdealComboBox.SelectedIndex; // Obtenemos el indice de la opcion seleccionada
            PuertoSerial.WriteLine(humIdealesCom.ElementAt(index)); // Enviamos el comando
        }

        private void TemperaturaIdealComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay una conexion activa salimos de la funcion

            int index = TemperaturaIdealComboBox.SelectedIndex; // Obtenemos el indice de la opcion seleccionada
            PuertoSerial.WriteLine(tempIdealesCom.ElementAt(index)); // Enviamos el comando
        }

        private void HumidificadorEstadoComboBox_SelectedValueChanged(object sender, EventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay una conexion activa salimos de la funcion

            string estado = HumidificadorEstadoComboBox.SelectedItem.ToString(); // Obtenemos la opciones seleccionada
             
            // Enviamos el comando segun el estado del humidificador seleccionado
            if (estado == "Apagado") PuertoSerial.WriteLine(COM_HUM_APAGAR);
            else PuertoSerial.WriteLine(COM_HUM_ENCENDER);
        }

        private void HumidificadorModoComboBox_SelectedValueChanged(object sender, EventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay una conexion activa salimos de la funcion

            string modo = HumidificadorModoComboBox.SelectedItem.ToString(); // Obtenemos la opcion seleccionada

            // Enviamos el comando segun el modo del humidificador seleccionado
            if (modo == "Subir Humedad") PuertoSerial.WriteLine(COM_HUM_SUBIR);
            else PuertoSerial.WriteLine(COM_HUM_BAJAR);
        }

        private void AireEstadoComboBox_SelectedValueChanged(object sender, EventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay una conexion activa salimos de la funcion

            string estado = AireEstadoComboBox.SelectedItem.ToString(); // Obtenemos la opcion seleccionada

            // Enviamos el comando segun el estado del aire acondicionado seleccionado
            if (estado == "Apagado") PuertoSerial.WriteLine(COM_AIRE_APAGAR);
            else PuertoSerial.WriteLine(COM_AIRE_ENCENDER);
        }

        private void AireModoComboBox_SelectedValueChanged(object sender, EventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay una conexion activa salimos de la funcion

            string estado = AireEstadoComboBox.SelectedItem.ToString(); // Obtenemos la opcion seleccionada

            // Enviamos el comando segun el modo del aire acondicionado seleccionado
            if (estado == "Calentar") PuertoSerial.WriteLine(COM_AIRE_CALENTAR);
            else PuertoSerial.WriteLine(COM_AIRE_ENFRIAR);
        }

        private void Temporizador_Tick(object sender, EventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay un conexion activa salimos de la funcion

            Temporizador.Stop(); // Detenemos el temporizador
            PuertoSerial.WriteLine(COM_ESTATUS); // Enviamos el comando ESTATUS
        }

        private void PuertoSerial_DataReceived(object sender, System.IO.Ports.SerialDataReceivedEventArgs e)
        {
            if (!PuertoSerial.IsOpen) return; // Si no hay un conexion activa salimos de la funcion

            string mensaje = PuertoSerial.ReadLine(); // Obtenemos el mensaje recibido por el puerto serial
            // Creamos una expresion regular para validar los mensajes recibidos por el puerto serial
            Regex regex = new Regex(@"(A|M)(,[0-9]{1,2}){2},(B|C),(D|E),(F|G),(H|I)");

            if (regex.IsMatch(mensaje)) // Si hay una subcadena que cumpla la expresion regular
            {
                string[] estatus = regex.Match(mensaje).Value.Split(','); // Obtenemos la subcadena que cumple la expresion regular

                // Actualizamos el modo de operacion del PIC16F887
                ModoLabel.Text = estatus.ElementAt(0) == COM_MANUAL ? "Manual" : "Automático";
                // Actualizamos la medicion de temperatura
                TemperaturaLabel.Text = estatus.ElementAt(1) + "°C";
                // Actualizamos la medicion de humedad
                HumedadLabel.Text = estatus.ElementAt(2) + "%";
                // Actualizamos el modo del aire acondicionado
                AireModoLabel.Text = estatus.ElementAt(3) == COM_AIRE_ENFRIAR ? "Enfriar" : "Calentar";
                // Actualizamos el estado del aire acondicionado
                AireEstadoLabel.Text = estatus.ElementAt(4) == COM_AIRE_APAGAR ? "Apagado" : "Encendido";
                // Actualizamos el modo del humidificador
                HumidificadorModoLabel.Text = estatus.ElementAt(5) == COM_HUM_BAJAR ? "Bajar Humedad" : "Subir Humedad";
                // Actualizamos el estado del humidificador
                HumidificadorEstadoLabel.Text = estatus.ElementAt(6) == COM_HUM_APAGAR ? "Apagado" : "Encendido";
            }

            Temporizador.Start(); // Iniciamos el temporizador
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            // Si hay una conexion abierta y el usuario desea cerrar la ventana, cerramos la conexion activa
            if (PuertoSerial.IsOpen) PuertoSerial.Close();
        }
    }
}
