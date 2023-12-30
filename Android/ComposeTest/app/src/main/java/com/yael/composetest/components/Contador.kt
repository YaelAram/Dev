package com.yael.composetest.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Remove
import androidx.compose.material3.FilledIconButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun Contador() {
    var contador by remember { mutableIntStateOf(0) }
    Controles(contador = contador, manejador = { contador += it })
}

@Composable
fun Controles(contador: Int, manejador: (Int) -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically
    ) {
        FilledIconButton(onClick = { manejador(-1) }) {
            Icon(imageVector = Icons.Filled.Remove, contentDescription = "Reducir contador")
        }
        Spacer(modifier = Modifier.width(8.dp))
        Text(text = "$contador", style = MaterialTheme.typography.titleLarge)
        Spacer(modifier = Modifier.width(8.dp))
        FilledIconButton(onClick = { manejador(1) }) {
            Icon(imageVector = Icons.Filled.Add, contentDescription = "Aumentar contador")
        }
    }
}