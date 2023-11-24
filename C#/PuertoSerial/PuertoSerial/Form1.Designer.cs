
namespace PuertoSerial
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.Puertos = new System.Windows.Forms.ComboBox();
            this.label1 = new System.Windows.Forms.Label();
            this.ConectarBtn = new System.Windows.Forms.Button();
            this.DesconectarBtn = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.EstatusLbl = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.ModoLbl = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.LedLbl = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.Modo = new System.Windows.Forms.ComboBox();
            this.label8 = new System.Windows.Forms.Label();
            this.Intensidad = new System.Windows.Forms.ComboBox();
            this.PuertoSerial = new System.IO.Ports.SerialPort(this.components);
            this.BuscarBtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Puertos
            // 
            this.Puertos.FormattingEnabled = true;
            this.Puertos.Location = new System.Drawing.Point(24, 55);
            this.Puertos.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Puertos.Name = "Puertos";
            this.Puertos.Size = new System.Drawing.Size(160, 24);
            this.Puertos.TabIndex = 0;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.SystemColors.GrayText;
            this.label1.Location = new System.Drawing.Point(25, 26);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(67, 20);
            this.label1.TabIndex = 1;
            this.label1.Text = "Puertos";
            // 
            // ConectarBtn
            // 
            this.ConectarBtn.Location = new System.Drawing.Point(229, 55);
            this.ConectarBtn.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.ConectarBtn.Name = "ConectarBtn";
            this.ConectarBtn.Size = new System.Drawing.Size(100, 28);
            this.ConectarBtn.TabIndex = 2;
            this.ConectarBtn.Text = "Conectar";
            this.ConectarBtn.UseVisualStyleBackColor = true;
            this.ConectarBtn.Click += new System.EventHandler(this.ConectarBtn_Click);
            // 
            // DesconectarBtn
            // 
            this.DesconectarBtn.Enabled = false;
            this.DesconectarBtn.Location = new System.Drawing.Point(372, 55);
            this.DesconectarBtn.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.DesconectarBtn.Name = "DesconectarBtn";
            this.DesconectarBtn.Size = new System.Drawing.Size(112, 28);
            this.DesconectarBtn.TabIndex = 3;
            this.DesconectarBtn.Text = "Desconectar";
            this.DesconectarBtn.UseVisualStyleBackColor = true;
            this.DesconectarBtn.Click += new System.EventHandler(this.DesconectarBtn_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.SystemColors.GrayText;
            this.label2.Location = new System.Drawing.Point(24, 110);
            this.label2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(187, 25);
            this.label2.TabIndex = 4;
            this.label2.Text = "Información General";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(28, 150);
            this.label3.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(71, 20);
            this.label3.TabIndex = 5;
            this.label3.Text = "Estatus:";
            // 
            // EstatusLbl
            // 
            this.EstatusLbl.AutoSize = true;
            this.EstatusLbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.EstatusLbl.Location = new System.Drawing.Point(115, 150);
            this.EstatusLbl.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.EstatusLbl.Name = "EstatusLbl";
            this.EstatusLbl.Size = new System.Drawing.Size(117, 20);
            this.EstatusLbl.TabIndex = 6;
            this.EstatusLbl.Text = "Desconectado";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(327, 150);
            this.label4.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(55, 20);
            this.label4.TabIndex = 7;
            this.label4.Text = "Modo:";
            // 
            // ModoLbl
            // 
            this.ModoLbl.AutoSize = true;
            this.ModoLbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ModoLbl.Location = new System.Drawing.Point(397, 150);
            this.ModoLbl.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.ModoLbl.Name = "ModoLbl";
            this.ModoLbl.Size = new System.Drawing.Size(93, 20);
            this.ModoLbl.TabIndex = 8;
            this.ModoLbl.Text = "Automático";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(563, 150);
            this.label5.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(110, 20);
            this.label5.TabIndex = 9;
            this.label5.Text = "Estatus LED:";
            // 
            // LedLbl
            // 
            this.LedLbl.AutoSize = true;
            this.LedLbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.LedLbl.Location = new System.Drawing.Point(691, 150);
            this.LedLbl.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.LedLbl.Name = "LedLbl";
            this.LedLbl.Size = new System.Drawing.Size(74, 20);
            this.LedLbl.TabIndex = 10;
            this.LedLbl.Text = "Apagado";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.ForeColor = System.Drawing.SystemColors.GrayText;
            this.label6.Location = new System.Drawing.Point(27, 206);
            this.label6.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(178, 25);
            this.label6.TabIndex = 11;
            this.label6.Text = "Control de Sistema";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.ForeColor = System.Drawing.SystemColors.GrayText;
            this.label7.Location = new System.Drawing.Point(31, 245);
            this.label7.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(50, 20);
            this.label7.TabIndex = 12;
            this.label7.Text = "Modo";
            // 
            // Modo
            // 
            this.Modo.Enabled = false;
            this.Modo.FormattingEnabled = true;
            this.Modo.Location = new System.Drawing.Point(35, 281);
            this.Modo.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Modo.Name = "Modo";
            this.Modo.Size = new System.Drawing.Size(160, 24);
            this.Modo.TabIndex = 13;
            this.Modo.SelectedValueChanged += new System.EventHandler(this.Modo_SelectedValueChanged);
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label8.ForeColor = System.Drawing.SystemColors.GrayText;
            this.label8.Location = new System.Drawing.Point(272, 245);
            this.label8.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(85, 20);
            this.label8.TabIndex = 14;
            this.label8.Text = "Intensidad";
            // 
            // Intensidad
            // 
            this.Intensidad.Enabled = false;
            this.Intensidad.FormattingEnabled = true;
            this.Intensidad.Location = new System.Drawing.Point(276, 281);
            this.Intensidad.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Intensidad.Name = "Intensidad";
            this.Intensidad.Size = new System.Drawing.Size(160, 24);
            this.Intensidad.TabIndex = 15;
            this.Intensidad.SelectedIndexChanged += new System.EventHandler(this.Intensidad_SelectedIndexChanged);
            // 
            // PuertoSerial
            // 
            this.PuertoSerial.DataReceived += new System.IO.Ports.SerialDataReceivedEventHandler(this.PuertoSerial_DataReceived);
            // 
            // BuscarBtn
            // 
            this.BuscarBtn.Location = new System.Drawing.Point(533, 55);
            this.BuscarBtn.Name = "BuscarBtn";
            this.BuscarBtn.Size = new System.Drawing.Size(126, 28);
            this.BuscarBtn.TabIndex = 16;
            this.BuscarBtn.Text = "Buscar Puertos";
            this.BuscarBtn.UseVisualStyleBackColor = true;
            this.BuscarBtn.Click += new System.EventHandler(this.BuscarBtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(837, 345);
            this.Controls.Add(this.BuscarBtn);
            this.Controls.Add(this.Intensidad);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.Modo);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.LedLbl);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.ModoLbl);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.EstatusLbl);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.DesconectarBtn);
            this.Controls.Add(this.ConectarBtn);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.Puertos);
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Puerto Serial";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ComboBox Puertos;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button ConectarBtn;
        private System.Windows.Forms.Button DesconectarBtn;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label EstatusLbl;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label ModoLbl;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label LedLbl;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.ComboBox Modo;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.ComboBox Intensidad;
        private System.IO.Ports.SerialPort PuertoSerial;
        private System.Windows.Forms.Button BuscarBtn;
    }
}

