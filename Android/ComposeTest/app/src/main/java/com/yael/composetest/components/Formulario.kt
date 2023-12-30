package com.yael.composetest.components

import android.widget.Toast
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Create
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.outlined.Done
import androidx.compose.material3.Button
import androidx.compose.material3.FilledIconButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedIconButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage

@Composable
fun Formulario() {
    var nombre by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    val context = LocalContext.current.applicationContext

    Column {
        Row(
            horizontalArrangement = Arrangement.Center,
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 8.dp)
        ) {
            AsyncImage(
                model = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_15.jpg",
                contentDescription = "Shen Splah Art",
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .size(150.dp)
                    .clip(CircleShape)
                    .border(1.dp, MaterialTheme.colorScheme.primary, CircleShape)
            )
        }
        Row(
            horizontalArrangement = Arrangement.Center,
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 8.dp)
        ) {
            Button(onClick = { /*TODO*/ }) {
                Text(text = "Generico")
            }
            Button(onClick = { /*TODO*/ }) {
                Icon(imageVector = Icons.Filled.Create, contentDescription = "Create Icon Button")
                Text(text = "Crear")
            }
            TextButton(onClick = { /*TODO*/ }) {
                Text(text = "Boton de Texto")
            }
        }
        Row(
            horizontalArrangement = Arrangement.Center,
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 8.dp)
        ) {
            OutlinedButton(onClick = { /*TODO*/ }) {
                Text(text = "Boton Sin Relleno")
            }
            OutlinedIconButton(
                onClick = { Toast.makeText(context, "Nombre ingresado: $nombre", Toast.LENGTH_SHORT).show() },
                enabled = nombre.isNotEmpty()
            ) {
                Icon(imageVector = Icons.Outlined.Done, contentDescription = "Done Icon Button")
            }
            FilledIconButton(
                onClick = { Toast.makeText(context, "Email ingresado: $email", Toast.LENGTH_LONG).show() },
                enabled = email.isNotEmpty()
            ) {
                Icon(imageVector = Icons.Filled.Close, contentDescription = "Close Icon Button")
            }
        }
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            TextField(
                value = nombre,
                onValueChange = { nombre = it },
                label = { Text(text = "Nombre")},
                placeholder = { Text(text = "Yael Aram") }
            )
            OutlinedTextField(
                value = email,
                onValueChange = { email = it },
                label = { Text(text = "Email") },
                placeholder = { Text(text = "yael@gmail.com")},
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email),
                leadingIcon = { Icon(imageVector = Icons.Filled.Email, contentDescription = "Email FIeld")}
            )
        }
    }
}