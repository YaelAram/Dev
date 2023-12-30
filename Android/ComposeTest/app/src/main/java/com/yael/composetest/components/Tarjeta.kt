package com.yael.composetest.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import com.yael.composetest.Mascota

@Composable
fun Tarjeta(mascota: Mascota) {
    Surface(
        shape = RoundedCornerShape(10.dp),
        modifier = Modifier
            .fillMaxWidth()
            .padding(all = 8.dp)
            .shadow(4.dp, RoundedCornerShape(10.dp), true, Color.White, Color.White)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(all = 10.dp), // Padding
            verticalAlignment = Alignment.CenterVertically
        ) {
            Image(
                painter = painterResource(id = mascota.id),
                contentDescription = mascota.desc,
                contentScale = ContentScale.FillHeight,
                modifier = Modifier
                    .height(96.dp)
                    .width(120.dp)
                    .clip(shape = RoundedCornerShape(16.dp)),
            )
            Spacer(modifier = Modifier.width(16.dp))
            Column (modifier = Modifier
                .fillMaxWidth()
                .height(96.dp)) {
                Text(
                    text = mascota.nombre,
                    color = MaterialTheme.colorScheme.secondary,
                    style = MaterialTheme.typography.titleLarge
                )
                Spacer(modifier = Modifier.height(2.dp))
                Text(
                    text = mascota.desc,
                    style = MaterialTheme.typography.bodySmall,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis
                )
            }
        }
    }
}
