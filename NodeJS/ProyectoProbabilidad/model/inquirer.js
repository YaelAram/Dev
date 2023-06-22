const inquirer = require( 'inquirer' );
require( 'colors' );

const itemsMenu = [
    {
        type: 'list',
        name: 'option',
        message: 'Selecciona una opcion:',
        choices: [
            {
                value: 1,
                name: `${ '1.'.yellow } Recomendar Bebida`
            },
            {
                value: 2,
                name: `${ '2.'.yellow } Mostrar los Primeros y Ultimos 5 registros`
            },
            {
                value: 3,
                name: `${ '3.'.yellow } Mostrar Probabilidad de Bebida Fria o Caliente P( Z )`
            },
            {
                value: 4,
                name: `${ '4.'.yellow } Mostrar la Probabilidad de P( X ∩ Y )`
            },
            {
                value: 5,
                name: `${ '5.'.yellow } Mostrar la Probabilidad de P( X ∩ Y ∩ Z )`
            },
            {
                value: 6,
                name: `${ '6.'.yellow } Mostrar la Probabilidad de P( X ∩ Y | Z )`
            },
            {
                value: 7,
                name: `${ '7.'.yellow } Salir`
            }
        ]
    }
];

const ageQuestion = [
    {
        type: 'list',
        name: 'data',
        message: 'Selecciona una opcion:',
        choices: [
            {
                value: 0,
                name: `${ '1.'.yellow } Menor`
            },
            {
                value: 1,
                name: `${ '2.'.yellow } Adulto`
            },
            {
                value: 2,
                name: `${ '3.'.yellow } Mayor`
            }
        ]
    }
];

const temperatureQuestion = [
    {
        type: 'list',
        name: 'data',
        message: 'Selecciona una opcion:',
        choices: [
            {
                value: 0,
                name: `${ '1.'.yellow } Frio`
            },
            {
                value: 1,
                name: `${ '2.'.yellow } Templado`
            },
            {
                value: 2,
                name: `${ '3.'.yellow } Calido`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log( `=======================================`.green );
    console.log( `       Selecciona una opción: `.yellow );
    console.log( `=======================================\n`.green );
    const { option } = await inquirer.prompt( itemsMenu );
    return option;
};

const pause = async () => {
    const pauseMessage = [
        {
            type: 'input',
            name: 'continueFlag',
            message: `Presiona ${ 'ENTER'.yellow } para continuar`
        }
    ];

    const { continueFlag } = await inquirer.prompt( pauseMessage );
    return continueFlag;
};

const getData = async ( flag = 'age' ) => {
    const { data } = await inquirer.prompt( ( flag === 'age' ) ? ageQuestion : temperatureQuestion );
    return data;
};

module.exports = {
    inquirerMenu,
    pause,
    getData
};
