$(document).ready(() => {

    //------------------------------------------------------------------------------

    $.datepicker.regional['ca'] = {
        closeText: 'Tancar',
        prevText: 'Prv',
        nextText: 'Seg;',
        currentText: 'Avui',
        monthNames: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
        dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
        dayNamesShort: ['Dug', 'Dln', 'Dmt', 'Dmc', 'Djs', 'Dvn', 'Dsb'],
        dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        changeMonth: false,
        changeYear: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ca']);
    $(() => {
        $('.datepicker').datepicker({
            showAnim: 'blind'
        });
    });

    //------------------------------------------------------------------------------

    function validarDNI() {
        // Validación de DNI: Comprueba si el DNI es correcto.
        if ($("input[class*='DNIClient form-control form-control-sm']").val().length > 0) {

            //Recogemos el valor del DNI en una variable.
            var dni = $("input[class*='DNIClient form-control form-control-sm']").val();

            // En caso que ponga el DNI con guión, se suprime.
            if ((dni.length == 10) && (dni.indexOf('-') != -1)) {
                dni = dni.replace('-', '');
            }

            // En caso que ponga el guión pero le faltan números de identificación
            if (((dni.length < 10) || (dni.length > 10)) && (dni.indexOf('-') != -1)) {
                alert("Debe de escribir un DNI correcto");
                return false;
            }

            //Se separan los números de la letra
            var letraDNI = dni.substring(8, 9).toUpperCase();
            var numDNI = parseInt(dni.substring(0, 8));

            //Se calcula la letra correspondiente al número
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
            var letraCorrecta = letras[numDNI % 23];

            if (letraDNI != letraCorrecta) {
                alert("Debe de escribir un DNI correcto");
                return false;
            }
        } else {
            alert('Falta por rellenar el campo "DNI"');
            return false;
        }
    }
});

//------------------------------------------------------------------------------

function validarNombre() {
    // Validación del Código Postal (en España son 5 caracteres numéricos): Comprueba si el dato ha sido introducido y si cumple con el patrón indicado.
    var patronCP = /^[a-zA-Z ]+$/;
    if ($("input[id='fullNameClient']").val().length > 30) {
        if (!(patronCP.test(formulario.cp.value))) {
            alert('No es un nombre valido');
            return false;
        }
    } else {
        return true;
    }
}

//------------------------------------------------------------------------------

function validarAmount() {
    // Validación del Código Postal (en España son 5 caracteres numéricos): Comprueba si el dato ha sido introducido y si cumple con el patrón indicado.
    var patronCP = /[^0-9]/;
    if ($("input[id='accountType']").val().length > 0) {
        if (!(patronCP.test(formulario.cp.value))) {
            alert('Amount no valido');
            return false;
        }
    } else {
        return true;
    }
}

//------------------------------------------------------------------------------
