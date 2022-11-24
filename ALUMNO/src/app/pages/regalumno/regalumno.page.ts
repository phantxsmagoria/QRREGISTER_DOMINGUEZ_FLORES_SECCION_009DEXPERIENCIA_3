import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/service/registroservice.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'



@Component({
  selector: 'app-regalumno',
  templateUrl: './regalumno.page.html',
  styleUrls: ['./regalumno.page.scss'],
})
export class RegalumnoPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] =[]; 

 constructor(private menuController: MenuController,
              private alertController: AlertController,
              private toastController: ToastController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) {
                this.formularioRegistro = this.fb.group({


                  'nombre': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(12),
                   
                  ])),
                  'correo': new FormControl("", [Validators.required, Validators.email]),


                  'contraseña': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(12),
                   
                  ])),
                  'confirmar': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(12),
                   
                  ])),
                  'apellido' : new FormControl("",Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(12),
                   
                  ])),
                });
              }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    var existe = 0;

    if (this.formularioRegistro.invalid){
      this.alertError();
      return;
    }

    else{        
      this.newUsuario.nombre = form.nombre,
      this.newUsuario.correo = form.correo,
      this.newUsuario.contraseña = form.contraseña,
      this.newUsuario.confirmar = form.confirmar,
      this.newUsuario.apellido = form.apellido;
    

    this.registroService.getUsuario().then(datos=>{ 
    this.usuarios = datos; 

    if (!datos || datos.length==0){
      this.registroService.addDatos(this.newUsuario).then(dato=>{ 
        this.newUsuario=<Usuario>{};
        this.showtoast('Usuario Creado satisfactoriamente');
      });
      this.formularioRegistro.reset();
      this.navController.navigateRoot('sesion-alumno');
    }else{
    
    for (let obj of this.usuarios){
      if (this.newUsuario.correo == obj.correo){
        existe = 1;
      }
    }//Fin del for
  
      if (existe == 1){
        this.alertCorreoDuplicado();
        this.formularioRegistro.reset();
      }
      else{
        this.registroService.addDatos(this.newUsuario).then(dato=>{ 
          this.newUsuario=<Usuario>{};
          this.showtoast('Usuario Creado satisfactoriamente');
        });
        this.formularioRegistro.reset();
        this.navController.navigateRoot('sesion-alumno');
      }
    }
    })  
  
  }//finelse

  }

  async alertinvalid() {
    const alerta = await this.alertController.create({
      header: 'Las contraseñas no coinciden.',
      message: ' Verifique contraseña nuevamente. ',
      buttons: ['Aceptar']
    }) 
    await alerta.present();
  }


  async alertError(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }



  async showtoast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
  



