class Persona(
    pNombre: String = "", // Propiedad indicando su visibilidad, val o var, tipo y valor por defecto
    pEdad: Int = 0,
    pAltura: Double = 0.0
){
     val nombre = pNombre
        get() = field.uppercase()

    var edad = pEdad
        set(value) {
            if (value in 0..110) field = value
        }

    var altura = pAltura

    fun esMayor(): Boolean {
        return edad > 18
    }

    override fun toString(): String {
        return "$nombre tiene $edad años y mide $altura metros"
    }
}