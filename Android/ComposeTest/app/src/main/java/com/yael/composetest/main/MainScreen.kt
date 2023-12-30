package com.yael.composetest.main

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.yael.composetest.Mascota
import com.yael.composetest.components.Contador
import com.yael.composetest.components.Login
import com.yael.composetest.components.Tarjeta
import com.yael.composetest.ui.theme.ComposeTestTheme

@Composable
fun MainScreen(mascotas: List<Mascota>, onNavigate: () -> Unit, padding: PaddingValues) {
    ComposeTestTheme {
        Surface(modifier = Modifier.fillMaxSize().padding(padding)) {
            Column(modifier = Modifier.padding(all = 8.dp)) {// Apila los elementos uno debajo de otro
                mascotas.forEach { Tarjeta(mascota = it) }
                Login()
                Button(onClick = onNavigate) {
                    Text(text = "Ir a FormScreen")
                }
            }
        }
    }
}


