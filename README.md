# QRREGISTER - APLICACIÓN QR 

App desarrollada en IONIC - ANGULAR, por Belén Domínguez y Jordan Flores.

## Instalación - comandos necesarios. 

Primero que todo, debemos aclarar que esta app cuenta con Local Storage, proveniente de Angular, y de Ionic. Por lo cual, es necesario instalar dichas librerías con los siguientes comandos.

Ionic Storage: 

```
npm install --save @ionic/storage
```

Angular Storage: 
```
npm install --save @ionic/storage-angular
```


También es necesario instalar las librerías para la API QR, usando el siguiente comando:
```
npm install angularx-qrcode@14.0.0 --save
```

# Notas adicionales ( IONIC SERVER ) :

1.  Para poder ingresar al menu de la app, es necesario primeramente crear un usuario, esto se debe hacer en la page regdocente / regalumno ( registrarse segun corresponda ), y luego ir a login. Ya que cuenta con GUARD. 

2.	Para verificar que el storage está funcionando correctamente, se debe ingresar en inspeccionar, luego en aplicación, y en el apartado lateral izquierdo, donde está el recuadro de almacenamiento, en indexedDB debe aparecer un arreglo con el usuario registrado previamente.

# Notas adicionales ( TESTING ) :

Los testing se encuentran en la carpeta DOCENTE bajo el nombre de E2E.

# Notas adicionales ( APKS ) :

El APK DOCENTE contiene la API QR.

Gracias.
