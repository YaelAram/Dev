namespace ProyectoControl
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.pictureBox2 = new System.Windows.Forms.PictureBox();
            this.TemperaturaLabel = new System.Windows.Forms.Label();
            this.HumedadLabel = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.PuertosComboBox = new System.Windows.Forms.ComboBox();
            this.RecargarBtn = new System.Windows.Forms.Button();
            this.ConectarBtn = new System.Windows.Forms.Button();
            this.DesconectarBtn = new System.Windows.Forms.Button();
            this.label5 = new System.Windows.Forms.Label();
            this.EstatusLabel = new System.Windows.Forms.Label();
            this.AireEstadoLabel = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.label12 = new System.Windows.Forms.Label();
            this.ModoComboBox = new System.Windows.Forms.ComboBox();
            this.label9 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.AireEstadoComboBox = new System.Windows.Forms.ComboBox();
            this.label14 = new System.Windows.Forms.Label();
            this.HumidificadorModoComboBox = new System.Windows.Forms.ComboBox();
            this.label15 = new System.Windows.Forms.Label();
            this.label16 = new System.Windows.Forms.Label();
            this.label17 = new System.Windows.Forms.Label();
            this.HumidificadorEstadoLabel = new System.Windows.Forms.Label();
            this.AireModoLabel = new System.Windows.Forms.Label();
            this.AireModoComboBox = new System.Windows.Forms.ComboBox();
            this.label18 = new System.Windows.Forms.Label();
            this.label19 = new System.Windows.Forms.Label();
            this.label20 = new System.Windows.Forms.Label();
            this.PuertoSerial = new System.IO.Ports.SerialPort(this.components);
            this.ModoLabel = new System.Windows.Forms.Label();
            this.label22 = new System.Windows.Forms.Label();
            this.Temporizador = new System.Windows.Forms.Timer(this.components);
            this.HumedadIdealComboBox = new System.Windows.Forms.ComboBox();
            this.TemperaturaIdealComboBox = new System.Windows.Forms.ComboBox();
            this.HumidificadorModoLabel = new System.Windows.Forms.Label();
            this.label23 = new System.Windows.Forms.Label();
            this.HumidificadorEstadoComboBox = new System.Windows.Forms.ComboBox();
            this.label21 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Cascadia Mono", 20F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(242)))), ((int)(((byte)(247)))), ((int)(((byte)(251)))));
            this.label1.Location = new System.Drawing.Point(281, 19);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(303, 35);
            this.label1.TabIndex = 0;
            this.label1.Text = "Sistema de Control";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Cascadia Mono", 14F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label2.Location = new System.Drawing.Point(255, 70);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(133, 25);
            this.label2.TabIndex = 1;
            this.label2.Text = "Temperatura";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Cascadia Mono", 14F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label3.Location = new System.Drawing.Point(512, 70);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(89, 25);
            this.label3.TabIndex = 2;
            this.label3.Text = "Humedad";
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(241, 107);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(75, 75);
            this.pictureBox1.TabIndex = 3;
            this.pictureBox1.TabStop = false;
            // 
            // pictureBox2
            // 
            this.pictureBox2.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox2.Image")));
            this.pictureBox2.Location = new System.Drawing.Point(493, 107);
            this.pictureBox2.Name = "pictureBox2";
            this.pictureBox2.Size = new System.Drawing.Size(75, 75);
            this.pictureBox2.TabIndex = 4;
            this.pictureBox2.TabStop = false;
            // 
            // TemperaturaLabel
            // 
            this.TemperaturaLabel.AutoSize = true;
            this.TemperaturaLabel.Font = new System.Drawing.Font("Cascadia Mono", 20F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TemperaturaLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(211)))), ((int)(((byte)(226)))), ((int)(((byte)(242)))));
            this.TemperaturaLabel.Location = new System.Drawing.Point(327, 124);
            this.TemperaturaLabel.Name = "TemperaturaLabel";
            this.TemperaturaLabel.Size = new System.Drawing.Size(79, 35);
            this.TemperaturaLabel.TabIndex = 5;
            this.TemperaturaLabel.Text = "24°C";
            // 
            // HumedadLabel
            // 
            this.HumedadLabel.AutoSize = true;
            this.HumedadLabel.Font = new System.Drawing.Font("Cascadia Mono", 20F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.HumedadLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(211)))), ((int)(((byte)(226)))), ((int)(((byte)(242)))));
            this.HumedadLabel.Location = new System.Drawing.Point(579, 124);
            this.HumedadLabel.Name = "HumedadLabel";
            this.HumedadLabel.Size = new System.Drawing.Size(63, 35);
            this.HumedadLabel.TabIndex = 6;
            this.HumedadLabel.Text = "20%";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Cascadia Mono", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(131)))), ((int)(((byte)(157)))), ((int)(((byte)(209)))));
            this.label6.Location = new System.Drawing.Point(35, 198);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(82, 21);
            this.label6.TabIndex = 7;
            this.label6.Text = "Conexión";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Cascadia Mono", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(131)))), ((int)(((byte)(157)))), ((int)(((byte)(209)))));
            this.label7.Location = new System.Drawing.Point(31, 307);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(181, 21);
            this.label7.TabIndex = 8;
            this.label7.Text = "Información General";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Cascadia Mono", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label8.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(131)))), ((int)(((byte)(157)))), ((int)(((byte)(209)))));
            this.label8.Location = new System.Drawing.Point(35, 405);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(73, 21);
            this.label8.TabIndex = 9;
            this.label8.Text = "Control";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label4.Location = new System.Drawing.Point(36, 231);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(49, 15);
            this.label4.TabIndex = 10;
            this.label4.Text = "Puertos";
            // 
            // PuertosComboBox
            // 
            this.PuertosComboBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.PuertosComboBox.Font = new System.Drawing.Font("Cascadia Mono", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.PuertosComboBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.PuertosComboBox.FormattingEnabled = true;
            this.PuertosComboBox.Location = new System.Drawing.Point(39, 253);
            this.PuertosComboBox.Name = "PuertosComboBox";
            this.PuertosComboBox.Size = new System.Drawing.Size(200, 29);
            this.PuertosComboBox.TabIndex = 11;
            // 
            // RecargarBtn
            // 
            this.RecargarBtn.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.RecargarBtn.Image = ((System.Drawing.Image)(resources.GetObject("RecargarBtn.Image")));
            this.RecargarBtn.Location = new System.Drawing.Point(651, 251);
            this.RecargarBtn.Name = "RecargarBtn";
            this.RecargarBtn.Size = new System.Drawing.Size(80, 35);
            this.RecargarBtn.TabIndex = 12;
            this.RecargarBtn.UseVisualStyleBackColor = false;
            this.RecargarBtn.Click += new System.EventHandler(this.RecargarBtn_Click);
            // 
            // ConectarBtn
            // 
            this.ConectarBtn.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.ConectarBtn.Image = ((System.Drawing.Image)(resources.GetObject("ConectarBtn.Image")));
            this.ConectarBtn.Location = new System.Drawing.Point(333, 251);
            this.ConectarBtn.Name = "ConectarBtn";
            this.ConectarBtn.Size = new System.Drawing.Size(80, 35);
            this.ConectarBtn.TabIndex = 13;
            this.ConectarBtn.UseVisualStyleBackColor = false;
            this.ConectarBtn.Click += new System.EventHandler(this.ConectarBtn_Click);
            // 
            // DesconectarBtn
            // 
            this.DesconectarBtn.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.DesconectarBtn.Enabled = false;
            this.DesconectarBtn.Image = ((System.Drawing.Image)(resources.GetObject("DesconectarBtn.Image")));
            this.DesconectarBtn.Location = new System.Drawing.Point(492, 251);
            this.DesconectarBtn.Name = "DesconectarBtn";
            this.DesconectarBtn.Size = new System.Drawing.Size(80, 35);
            this.DesconectarBtn.TabIndex = 14;
            this.DesconectarBtn.UseVisualStyleBackColor = false;
            this.DesconectarBtn.Click += new System.EventHandler(this.DesconectarBtn_Click);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label5.Location = new System.Drawing.Point(36, 344);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(72, 18);
            this.label5.TabIndex = 15;
            this.label5.Text = "Estatus:";
            // 
            // EstatusLabel
            // 
            this.EstatusLabel.AutoSize = true;
            this.EstatusLabel.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.EstatusLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(185)))), ((int)(((byte)(207)))), ((int)(((byte)(232)))));
            this.EstatusLabel.Location = new System.Drawing.Point(114, 344);
            this.EstatusLabel.Name = "EstatusLabel";
            this.EstatusLabel.Size = new System.Drawing.Size(104, 18);
            this.EstatusLabel.TabIndex = 16;
            this.EstatusLabel.Text = "Desconectado";
            // 
            // AireEstadoLabel
            // 
            this.AireEstadoLabel.AutoSize = true;
            this.AireEstadoLabel.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AireEstadoLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(185)))), ((int)(((byte)(207)))), ((int)(((byte)(232)))));
            this.AireEstadoLabel.Location = new System.Drawing.Point(746, 344);
            this.AireEstadoLabel.Name = "AireEstadoLabel";
            this.AireEstadoLabel.Size = new System.Drawing.Size(64, 18);
            this.AireEstadoLabel.TabIndex = 18;
            this.AireEstadoLabel.Text = "Apagado";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label10.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label10.Location = new System.Drawing.Point(524, 344);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(216, 18);
            this.label10.TabIndex = 17;
            this.label10.Text = "Estado Aire Acondicionado:";
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label12.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label12.Location = new System.Drawing.Point(251, 344);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(176, 18);
            this.label12.TabIndex = 19;
            this.label12.Text = "Estado Humidificador:";
            // 
            // ModoComboBox
            // 
            this.ModoComboBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.ModoComboBox.Enabled = false;
            this.ModoComboBox.Font = new System.Drawing.Font("Cascadia Mono", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ModoComboBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.ModoComboBox.FormattingEnabled = true;
            this.ModoComboBox.Location = new System.Drawing.Point(39, 461);
            this.ModoComboBox.Name = "ModoComboBox";
            this.ModoComboBox.Size = new System.Drawing.Size(200, 29);
            this.ModoComboBox.TabIndex = 22;
            this.ModoComboBox.SelectedValueChanged += new System.EventHandler(this.ModoComboBox_SelectedValueChanged);
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label9.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label9.Location = new System.Drawing.Point(36, 437);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(31, 15);
            this.label9.TabIndex = 21;
            this.label9.Text = "Modo";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label11.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label11.Location = new System.Drawing.Point(36, 512);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(192, 18);
            this.label11.TabIndex = 23;
            this.label11.Text = "Control Modo Automático";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label13.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label13.Location = new System.Drawing.Point(32, 610);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(160, 18);
            this.label13.TabIndex = 24;
            this.label13.Text = "Control Modo Manual";
            // 
            // AireEstadoComboBox
            // 
            this.AireEstadoComboBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.AireEstadoComboBox.Enabled = false;
            this.AireEstadoComboBox.Font = new System.Drawing.Font("Cascadia Mono", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AireEstadoComboBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.AireEstadoComboBox.FormattingEnabled = true;
            this.AireEstadoComboBox.Location = new System.Drawing.Point(435, 665);
            this.AireEstadoComboBox.Name = "AireEstadoComboBox";
            this.AireEstadoComboBox.Size = new System.Drawing.Size(170, 29);
            this.AireEstadoComboBox.TabIndex = 26;
            this.AireEstadoComboBox.SelectedValueChanged += new System.EventHandler(this.AireEstadoComboBox_SelectedValueChanged);
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label14.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label14.Location = new System.Drawing.Point(432, 643);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(157, 15);
            this.label14.TabIndex = 25;
            this.label14.Text = "Estado Aire Acondicionado";
            // 
            // HumidificadorModoComboBox
            // 
            this.HumidificadorModoComboBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.HumidificadorModoComboBox.Enabled = false;
            this.HumidificadorModoComboBox.Font = new System.Drawing.Font("Cascadia Mono", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.HumidificadorModoComboBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.HumidificadorModoComboBox.FormattingEnabled = true;
            this.HumidificadorModoComboBox.Location = new System.Drawing.Point(222, 665);
            this.HumidificadorModoComboBox.Name = "HumidificadorModoComboBox";
            this.HumidificadorModoComboBox.Size = new System.Drawing.Size(170, 29);
            this.HumidificadorModoComboBox.TabIndex = 28;
            this.HumidificadorModoComboBox.SelectedValueChanged += new System.EventHandler(this.HumidificadorModoComboBox_SelectedValueChanged);
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label15.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label15.Location = new System.Drawing.Point(219, 643);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(115, 15);
            this.label15.TabIndex = 27;
            this.label15.Text = "Modo Humidificador";
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label16.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label16.Location = new System.Drawing.Point(279, 643);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(0, 15);
            this.label16.TabIndex = 29;
            // 
            // label17
            // 
            this.label17.AutoSize = true;
            this.label17.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label17.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label17.Location = new System.Drawing.Point(525, 370);
            this.label17.Name = "label17";
            this.label17.Size = new System.Drawing.Size(48, 18);
            this.label17.TabIndex = 31;
            this.label17.Text = "Modo:";
            // 
            // HumidificadorEstadoLabel
            // 
            this.HumidificadorEstadoLabel.AutoSize = true;
            this.HumidificadorEstadoLabel.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.HumidificadorEstadoLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(185)))), ((int)(((byte)(207)))), ((int)(((byte)(232)))));
            this.HumidificadorEstadoLabel.Location = new System.Drawing.Point(433, 344);
            this.HumidificadorEstadoLabel.Name = "HumidificadorEstadoLabel";
            this.HumidificadorEstadoLabel.Size = new System.Drawing.Size(64, 18);
            this.HumidificadorEstadoLabel.TabIndex = 20;
            this.HumidificadorEstadoLabel.Text = "Apagado";
            // 
            // AireModoLabel
            // 
            this.AireModoLabel.AutoSize = true;
            this.AireModoLabel.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AireModoLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(185)))), ((int)(((byte)(207)))), ((int)(((byte)(232)))));
            this.AireModoLabel.Location = new System.Drawing.Point(579, 370);
            this.AireModoLabel.Name = "AireModoLabel";
            this.AireModoLabel.Size = new System.Drawing.Size(112, 18);
            this.AireModoLabel.TabIndex = 32;
            this.AireModoLabel.Text = "Subir Humedad";
            // 
            // AireModoComboBox
            // 
            this.AireModoComboBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.AireModoComboBox.Enabled = false;
            this.AireModoComboBox.Font = new System.Drawing.Font("Cascadia Mono", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AireModoComboBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.AireModoComboBox.FormattingEnabled = true;
            this.AireModoComboBox.Location = new System.Drawing.Point(624, 665);
            this.AireModoComboBox.Name = "AireModoComboBox";
            this.AireModoComboBox.Size = new System.Drawing.Size(170, 29);
            this.AireModoComboBox.TabIndex = 34;
            this.AireModoComboBox.SelectedValueChanged += new System.EventHandler(this.AireModoComboBox_SelectedValueChanged);
            // 
            // label18
            // 
            this.label18.AutoSize = true;
            this.label18.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label18.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label18.Location = new System.Drawing.Point(621, 643);
            this.label18.Name = "label18";
            this.label18.Size = new System.Drawing.Size(169, 15);
            this.label18.TabIndex = 33;
            this.label18.Text = "Modo del Aire Acondicionado";
            // 
            // label19
            // 
            this.label19.AutoSize = true;
            this.label19.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label19.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label19.Location = new System.Drawing.Point(36, 541);
            this.label19.Name = "label19";
            this.label19.Size = new System.Drawing.Size(85, 15);
            this.label19.TabIndex = 35;
            this.label19.Text = "Humedad Ideal";
            // 
            // label20
            // 
            this.label20.AutoSize = true;
            this.label20.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label20.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label20.Location = new System.Drawing.Point(224, 541);
            this.label20.Name = "label20";
            this.label20.Size = new System.Drawing.Size(109, 15);
            this.label20.TabIndex = 37;
            this.label20.Text = "Temperatura Ideal";
            // 
            // PuertoSerial
            // 
            this.PuertoSerial.DataReceived += new System.IO.Ports.SerialDataReceivedEventHandler(this.PuertoSerial_DataReceived);
            // 
            // ModoLabel
            // 
            this.ModoLabel.AutoSize = true;
            this.ModoLabel.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ModoLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(185)))), ((int)(((byte)(207)))), ((int)(((byte)(232)))));
            this.ModoLabel.Location = new System.Drawing.Point(92, 370);
            this.ModoLabel.Name = "ModoLabel";
            this.ModoLabel.Size = new System.Drawing.Size(88, 18);
            this.ModoLabel.TabIndex = 39;
            this.ModoLabel.Text = "Automático";
            // 
            // label22
            // 
            this.label22.AutoSize = true;
            this.label22.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label22.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label22.Location = new System.Drawing.Point(38, 370);
            this.label22.Name = "label22";
            this.label22.Size = new System.Drawing.Size(48, 18);
            this.label22.TabIndex = 38;
            this.label22.Text = "Modo:";
            // 
            // Temporizador
            // 
            this.Temporizador.Interval = 1000;
            this.Temporizador.Tick += new System.EventHandler(this.Temporizador_Tick);
            // 
            // HumedadIdealComboBox
            // 
            this.HumedadIdealComboBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.HumedadIdealComboBox.Enabled = false;
            this.HumedadIdealComboBox.Font = new System.Drawing.Font("Cascadia Mono", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.HumedadIdealComboBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.HumedadIdealComboBox.FormattingEnabled = true;
            this.HumedadIdealComboBox.Location = new System.Drawing.Point(38, 563);
            this.HumedadIdealComboBox.Name = "HumedadIdealComboBox";
            this.HumedadIdealComboBox.Size = new System.Drawing.Size(170, 29);
            this.HumedadIdealComboBox.TabIndex = 40;
            this.HumedadIdealComboBox.SelectedIndexChanged += new System.EventHandler(this.HumedadIdealComboBox_SelectedIndexChanged);
            // 
            // TemperaturaIdealComboBox
            // 
            this.TemperaturaIdealComboBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.TemperaturaIdealComboBox.Enabled = false;
            this.TemperaturaIdealComboBox.Font = new System.Drawing.Font("Cascadia Mono", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TemperaturaIdealComboBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.TemperaturaIdealComboBox.FormattingEnabled = true;
            this.TemperaturaIdealComboBox.Location = new System.Drawing.Point(227, 563);
            this.TemperaturaIdealComboBox.Name = "TemperaturaIdealComboBox";
            this.TemperaturaIdealComboBox.Size = new System.Drawing.Size(170, 29);
            this.TemperaturaIdealComboBox.TabIndex = 41;
            this.TemperaturaIdealComboBox.SelectedIndexChanged += new System.EventHandler(this.TemperaturaIdealComboBox_SelectedIndexChanged);
            // 
            // HumidificadorModoLabel
            // 
            this.HumidificadorModoLabel.AutoSize = true;
            this.HumidificadorModoLabel.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.HumidificadorModoLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(185)))), ((int)(((byte)(207)))), ((int)(((byte)(232)))));
            this.HumidificadorModoLabel.Location = new System.Drawing.Point(305, 370);
            this.HumidificadorModoLabel.Name = "HumidificadorModoLabel";
            this.HumidificadorModoLabel.Size = new System.Drawing.Size(72, 18);
            this.HumidificadorModoLabel.TabIndex = 43;
            this.HumidificadorModoLabel.Text = "Calentar";
            // 
            // label23
            // 
            this.label23.AutoSize = true;
            this.label23.Font = new System.Drawing.Font("Cascadia Mono", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label23.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.label23.Location = new System.Drawing.Point(251, 370);
            this.label23.Name = "label23";
            this.label23.Size = new System.Drawing.Size(48, 18);
            this.label23.TabIndex = 42;
            this.label23.Text = "Modo:";
            // 
            // HumidificadorEstadoComboBox
            // 
            this.HumidificadorEstadoComboBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.HumidificadorEstadoComboBox.Enabled = false;
            this.HumidificadorEstadoComboBox.Font = new System.Drawing.Font("Cascadia Mono", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.HumidificadorEstadoComboBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(156)))), ((int)(((byte)(182)))), ((int)(((byte)(221)))));
            this.HumidificadorEstadoComboBox.FormattingEnabled = true;
            this.HumidificadorEstadoComboBox.Location = new System.Drawing.Point(35, 665);
            this.HumidificadorEstadoComboBox.Name = "HumidificadorEstadoComboBox";
            this.HumidificadorEstadoComboBox.Size = new System.Drawing.Size(170, 29);
            this.HumidificadorEstadoComboBox.TabIndex = 45;
            this.HumidificadorEstadoComboBox.SelectedValueChanged += new System.EventHandler(this.HumidificadorEstadoComboBox_SelectedValueChanged);
            // 
            // label21
            // 
            this.label21.AutoSize = true;
            this.label21.Font = new System.Drawing.Font("Cascadia Mono", 8F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label21.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(106)))), ((int)(((byte)(127)))), ((int)(((byte)(193)))));
            this.label21.Location = new System.Drawing.Point(32, 643);
            this.label21.Name = "label21";
            this.label21.Size = new System.Drawing.Size(127, 15);
            this.label21.TabIndex = 44;
            this.label21.Text = "Estado Humidificador";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(24)))), ((int)(((byte)(24)))), ((int)(((byte)(27)))));
            this.ClientSize = new System.Drawing.Size(835, 718);
            this.Controls.Add(this.HumidificadorEstadoComboBox);
            this.Controls.Add(this.label21);
            this.Controls.Add(this.HumidificadorModoLabel);
            this.Controls.Add(this.label23);
            this.Controls.Add(this.TemperaturaIdealComboBox);
            this.Controls.Add(this.HumedadIdealComboBox);
            this.Controls.Add(this.ModoLabel);
            this.Controls.Add(this.label22);
            this.Controls.Add(this.label20);
            this.Controls.Add(this.label19);
            this.Controls.Add(this.AireModoComboBox);
            this.Controls.Add(this.label18);
            this.Controls.Add(this.AireModoLabel);
            this.Controls.Add(this.label17);
            this.Controls.Add(this.label16);
            this.Controls.Add(this.HumidificadorModoComboBox);
            this.Controls.Add(this.label15);
            this.Controls.Add(this.AireEstadoComboBox);
            this.Controls.Add(this.label14);
            this.Controls.Add(this.label13);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.ModoComboBox);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.HumidificadorEstadoLabel);
            this.Controls.Add(this.label12);
            this.Controls.Add(this.AireEstadoLabel);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.EstatusLabel);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.DesconectarBtn);
            this.Controls.Add(this.ConectarBtn);
            this.Controls.Add(this.RecargarBtn);
            this.Controls.Add(this.PuertosComboBox);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.HumedadLabel);
            this.Controls.Add(this.TemperaturaLabel);
            this.Controls.Add(this.pictureBox2);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Font = new System.Drawing.Font("Cascadia Mono", 7.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Sistema de Control";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Form1_FormClosing);
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.PictureBox pictureBox2;
        private System.Windows.Forms.Label TemperaturaLabel;
        private System.Windows.Forms.Label HumedadLabel;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.ComboBox PuertosComboBox;
        private System.Windows.Forms.Button RecargarBtn;
        private System.Windows.Forms.Button ConectarBtn;
        private System.Windows.Forms.Button DesconectarBtn;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label EstatusLabel;
        private System.Windows.Forms.Label AireEstadoLabel;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.ComboBox ModoComboBox;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.ComboBox AireEstadoComboBox;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.ComboBox HumidificadorModoComboBox;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.Label label17;
        private System.Windows.Forms.Label HumidificadorEstadoLabel;
        private System.Windows.Forms.Label AireModoLabel;
        private System.Windows.Forms.ComboBox AireModoComboBox;
        private System.Windows.Forms.Label label18;
        private System.Windows.Forms.Label label19;
        private System.Windows.Forms.Label label20;
        private System.IO.Ports.SerialPort PuertoSerial;
        private System.Windows.Forms.Label ModoLabel;
        private System.Windows.Forms.Label label22;
        private System.Windows.Forms.Timer Temporizador;
        private System.Windows.Forms.ComboBox HumedadIdealComboBox;
        private System.Windows.Forms.ComboBox TemperaturaIdealComboBox;
        private System.Windows.Forms.Label HumidificadorModoLabel;
        private System.Windows.Forms.Label label23;
        private System.Windows.Forms.ComboBox HumidificadorEstadoComboBox;
        private System.Windows.Forms.Label label21;
    }
}

