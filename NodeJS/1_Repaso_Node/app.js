const empleados = [
    { id: 1, nombre: 'Yael' },
    { id: 2, nombre: 'Juan' },
    { id: 3, nombre: 'Oscar' }
],
salarios = [
    { id: 1, salario: 1000},
    { id: 2, salario: 1500}
];

const getEmpleado = async ( id ) => {
    const empleado = empleados.find( empleado => empleado?.id === id );
    if( empleado ) return empleado?.nombre;
    else throw `Empleado con el id ${ id } no existe.`
};

const getSalario = async ( id ) => {
    const salario = salarios.find( salario => salario?.id === id );
    if( salario ) return salario?.salario;
    else throw `Salario con el id ${ id } no existe.`
};

const getInfo = async ( id ) => {
    try{
        const empleado = await getEmpleado( id ),
               salario = await getSalario( id );
        return { empleado, salario };
    }
    catch( error ){
        throw error;
    }
};

getInfo( 4 )
    .then( ( { empleado, salario } ) => console.log( `${ empleado } tiene un salario de $${ salario }` ) )
    .catch( console.log );

const date = new Date();
console.log(date);
console.log(new Intl.DateTimeFormat('es-MX').format(date));
console.log(new Intl.DateTimeFormat('es-MX', { dateStyle: 'full', timeStyle: 'long', hour12: true }).format(date));