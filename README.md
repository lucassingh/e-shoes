# E-shoes 

Este proyecto fue realizado en el curso de React Js con [Create React App] brindado por CoderHouse durante diciembre y enero del año 2020-2021. 

El mismo consiste en el desarrollo de un e-commerce sencillo que permite seleccionar un producto de un grupo de categorias, ver su detalle, agregarlo a un cart y la simulacion de un pago. 

La tematica elegida para el proyecto fue representar un shop de zapatillas para running, usando 3 categorias como marcas principales. 
En el home, o pagina principal se ve la presentacion de las tres categorias, donde se ven los productos destacados de cada marca representada. 
Al seleccionar una categoria, se puede ver el listado filtrado por marcas. 
Si hacemos click en el CTA ver detalle, podemos ver el producto en detalle y modificar la cantidad, tambien una descripcion mas detallada del prodcuto y una seccion de productos sugeridos provenientes de un filtrado por una consulta con precios por debajo de $3000  (<3000) 
Al hacer click en el CTA agregar al carrito el item seleccionado por el ID nos redirege al cart con el producto agregado y la opcion de compra para ser redirigidos a la seccion checkout y completar los datos en un formulario para realizar la compra.
(NOTA: A fines de uso educativo no se realizo una exhaustiva validacion de los inputs de todo el formulario, solo que que el boton de comprar este deshabilitado si lo campos estan vacios a fines de no grabar registros vacios en la bd).
Como la ruta del cart es una ruta a la que se accede solamente si elegimos comprar un prod, en la barra de navegacion, podemos hacer click en el icono cart que nos indica cuantos items hay agregados y un resumen de los productos agregados, con la suma del importe total.

#Instalación del proyecto

version de Node js: v12.10.0
npm: 6.10.3
Url del proyecto: [https://github.com/lucassingh/e-shoes]

-Ejecutar git clone + https://github.com/lucassingh/e-shoes.git 
-Acceder a la carpeta del proyecto descargado (segun tu path) cd e-shoes
-Ejecutar el comando npm install
-Una vez finalizadas las instalaciones de dependencias ejecutar el comando npm start el proyecto se ejecutara automaticamente en el puerto http://localhost:3000

#Estructura del proyecto

-Dentro de la carpeta components encontramos los componentes propios de la aplicacion, como ser el home, cart, category y en la carpeta shared los componentes que se utilizaran en toda la aplicacion (componentes cross) como ser card, navbar, widgetCard etc.

#Metodologia de trabajo

-Este repositorio esta vinculado con Vercel, es decir que cada vez que se hace un merge de una PR con el branch main se despliega una nueva version en el servidor de vercel.
La ultima version desplegada se puede ver en el siguiente link [https://e-shoes.lucassingh.vercel.app/]

-Ej: si se quiere implementar una mejora de algun componente, crear una nueva branch a partir de la rama main con el comando git checkout -b <nombre-nueva-branch>.
-realizar los cambios 
-ejecutar el comando git status, para ver los archivos modificados, ejecutar el comando git add . si queremos agregar todos los cambios o git add <nombre del archivo>
- ejectuar git comit -m "<nombre descriptivo del commit resumiendo lo que se realizo>"
-ejecutar git push origin <nombre-branch-creada-anteriormente>
- ir a github en la url del repo, aparecera un mensaje con la opcion de crear nueva PR (pull request) crear pull request, en la descripcion colocar que fue lo que se realizo, en lo posible con capturas de pantalla de antes y despues de la mejora.
 - pedir code review de la PR, 
 - Si esta Ok se meregeara con la branch main.
 -Si tiene errores marcarlos en los comentarios, corregirlos y realizar el proceso del commit nuevamente.
 - una vez hecho el merge, moverse a la branch main y ejecutar el comando git pull para descargar los cambios y actualizar el repo. 
  
 #Librerias externas utilizadas
 
 Se utilizo para este proyecto:
 
 - react-icons [https://www.npmjs.com/package/react-icons] (para el manejo de iconos)
 - react-credit-cards [https://www.npmjs.com/package/react-credit-cards] (para la implemtacion de las tarjetas de credito en el checkout)
(NOTA: para pruebas, si se coloca en el input del numero de tarjeta cualquier numero que empiece con 45 se obvservara una tarjeta Visa si ponemos un 54 se vera una tarjeta mastercard)

#Mejoras futuras

- Agregar validaciones personalizadas a los inputs del formulario, por ej, en los datos de tarjeta de credito, que el numero de la tarjeta sea solo de 16 digitos, y solo numeros, etc
- Agregar nuevas categorias.
- Agregar componente que muestra distintas vistas en el detalle del producto. 
- Terminar de hacer responsive algunos componentes

