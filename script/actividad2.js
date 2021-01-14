console.log("Todo funciona bien"); //Mensaje para probar la carga correcta del script

d3.csv("file:///G:/Mi%20unidad/Maestr%C3%ADa/Asignaturas/Herramientas%20de%20visualizaci%C3%B3n/Actividades/Visualizaci%C3%B3n%20D3%20-%201/datos/notas.csv").then(function (datos) {
    //console.log(datos) //Salida para probar la carga de los datos

    //Definimos el alto y el ancho de la gráfica

    var height = 700
    var width = 700

    //Ahora definimos los margenes de la gráfica

    var margin = {
        top: 30,
        bottom: 30,
        left: 30,
        right: 30
    }

    //Definimos el elemento donde se va a mostrar la gráfica y creamos el lienzo SVG

    var lienzosvg = d3.select("section")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    //Se establece una escala de dominio  1,10 en el rango 0,600

    var escalaX = d3.scaleLinear()
        .domain([1, 10])
        .range([0 + margin.left, width - margin.right])

    // Para visualizar el eje X

    var ejeX = d3.axisBottom(escalaX)
        .ticks(10)
        .tickFormat(d3.format(".2s")) //Poner los ticks en el eje

    //Dubujar eje X

    lienzosvg
        .append("g")
        .attr("transform", "translate (0," + (height - margin.bottom + ")")) //Se calculan los margenes para el eje X
        .call(ejeX)

})
