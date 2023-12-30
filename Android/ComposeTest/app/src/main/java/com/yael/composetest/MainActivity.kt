package com.yael.composetest

import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Create
import androidx.compose.material3.FabPosition
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.yael.composetest.main.FormScreen
import com.yael.composetest.main.MainScreen

data class Mascota(val id: Int, val nombre: String, val desc: String)

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val mascotas = listOf(
            Mascota(
                R.drawable.blue,
                "Blue",
                "Mi primer perro nacio en el 2007 y murio en el 2019, aun conservo sus cosas y lo sigo extrañando"
            ),
            Mascota(
                R.drawable.coffee,
                "Coffee",
                "Mi segundo perro es color blanco con ojos verdes, cuando llego su aliento olia como cafe"
            ),
            Mascota(
                R.drawable.blacky,
                "Blacky",
                "Mi tercer perro es color negro y blanco, pero sobretodo negro, siempre duerme conmigo"
            )
        )

        setContent {
            Main(mascotas = mascotas)
        }
    }

    @Composable
    fun Main(mascotas: List<Mascota>) {
        val navController = rememberNavController()
        val context = LocalContext.current.applicationContext

        Scaffold(
            floatingActionButton = {
                FloatingActionButton(onClick = { Toast.makeText(context, "Click", Toast.LENGTH_SHORT).show() }) {
                    Icon(imageVector = Icons.Filled.Create, contentDescription = "Create FAB")
                }
            },
            floatingActionButtonPosition = FabPosition.End,

        ) {padding ->
            NavHost(navController = navController, startDestination = "main"){
                composable("main") {
                    MainScreen(mascotas = mascotas, onNavigate = { navController.navigate("form") }, padding = padding)
                }
                composable("form") {
                    FormScreen(onNavigate = { navController.navigate("main") }, padding = padding)
                }
            }
        }
    }
}