package com.yael.composetest.components

import android.widget.Toast
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Login
import androidx.compose.material.icons.filled.Password
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp

@Composable
fun Login() {
    val context = LocalContext.current.applicationContext

    var user by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var result by remember { mutableStateOf("No result") }
    var isOn by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(all = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        OutlinedTextField(
            value = user,
            onValueChange = { user = it },
            label = { Text(text = "Nombre de usuario") },
            placeholder = { Text(text = "Joe") },
            leadingIcon = { Icon(
                imageVector = Icons.Filled.Person,
                contentDescription = "User icon"
            ) },
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Text),
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(8.dp))
        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            label = { Text(text = "Contraseña") },
            placeholder = { Text(text = "12345") },
            leadingIcon = { Icon(
                imageVector = Icons.Filled.Password,
                contentDescription = "Password icon"
            ) },
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Text),
            modifier = Modifier.fillMaxWidth(),
            visualTransformation = PasswordVisualTransformation()
        )
        Spacer(modifier = Modifier.height(16.dp))
        Button(
            onClick = {
                      result = "User: $user    Password: $password"
            },
            enabled = user.isNotEmpty() && password.isNotEmpty()
        ) {
            Icon(imageVector = Icons.Filled.Login, contentDescription = "Login Icons")
            Spacer(modifier = Modifier.width(4.dp))
            Text(text = "Iniciar Sesion")
        }
        Spacer(modifier = Modifier.height(8.dp))
        Text(text = result, style = MaterialTheme.typography.bodyLarge)
        Spacer(modifier = Modifier.height(8.dp))
        Row(horizontalArrangement = Arrangement.Center, modifier = Modifier.fillMaxWidth()) {
            LinearProgressIndicator()
        }
        Spacer(modifier = Modifier.height(8.dp))
        Row(
            horizontalArrangement = Arrangement.Center,
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Switch(checked = isOn, onCheckedChange = {
                Toast.makeText(context, "Suscribirse? $it", Toast.LENGTH_SHORT).show()
                isOn = it
            })
            Spacer(modifier = Modifier.width(8.dp))
            Text(text = "Mantener sesion")
        }
    }
}
