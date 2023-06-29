import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormGroup } from '@angular/forms';
import { CreateUserModel } from 'src/app/Models/Users/CreateUserModel';
import { UserServiceService } from 'src/app/services/Users/user-service.service';
import { faRightFromBracket, faImage,faUser, faCalendar, faIdCard, faLocationDot, faEnvelope, faXmark,faUsers,faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { Event, Router } from '@angular/router';
import { FireBaseService } from 'src/app/services/fireBase/fire-base.service';
import { FileService } from 'src/app/services/Files/file.service';
import { Containers } from 'src/containers';
import { Dialog } from '@angular/cdk/dialog';
import { ResponseModalComponent} from '../../modals/response-modal/response-modal.component'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  imagenSeleccionada: File = new File([],'');
  imagenBase64: string = '';
  faUsers = faUsers;
  faUser = faUser;
  faPhone = faPhone;
  faUserSecret = faUserSecret;
  faEnvelope = faEnvelope;
  faRightFromBracket = faRightFromBracket;
  faLocationDot = faLocationDot;
  faIdCard  = faIdCard;
  faCalendar = faCalendar;
  faImage = faImage;
  rutaArchivo: string = '';
  form:FormGroup = new FormGroup('');
  imagen: string = '';


  constructor
  (
    private formBuilder: FormBuilder,
    private userService : UserServiceService,
    private router: Router,
    private fileService : FileService,
    private dialog : Dialog
  )
  {
    this.buidForm()
  }

  buidForm(){
    this.form = this.formBuilder.group({
        name: ['Luis Andres',[Validators.required]],
        image : [this.imagen,[Validators.required]],
        lastName: ['Martinez',[Validators.required]],
        secondLastName: ['Estremor',[Validators.required]],
        dateOfBirth: ['2023-06-21',[Validators.required]],
        documentTypeId: ['1',[Validators.required]],
        document: ['901282344',[Validators.required]],
        numberPhone: ['3209876565',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        email: ['luisandres@gamil.com',[Validators.required, Validators.email]],
        password: ['Hola123*',[Validators.required]],
        address: ['Carrera 31 #65A-21',[Validators.required]],
        rolId:['1',[Validators.required]]
    });
  }

  registerUser(event:any){
    if(this.form.valid){
      this.createUser();
    }else{
      this.form.markAllAsTouched();
    }
  }
  createUser(){
    const data = this.form.value;
    data.image = this.rutaArchivo;
    this.userService.create(data).
    subscribe(response =>{
      if(response){
        console.log('reespuesta Create',response);
        this.router.navigate(['/users'])
      }
    });

  }

  uploadFile(event: any){
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e:any) =>{
    this.imagen =  e.target.result; //base64
  }
    reader.readAsDataURL(file);

    if(file){
      this.fileService.uploadImage(file)
      .subscribe(response =>{
        if(response.succeeded){
          this.rutaArchivo = response.data;
          this.openModal()
        }
      });
    }
  }

  onUpload(event: any){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);

    if(file){
      this.fileService.uploadImage(file)
      .subscribe(response =>{
        if(response.succeeded){
          this.rutaArchivo = response.data;
        }
      });
    }
  }

  openModal(){
    this.dialog.open(ResponseModalComponent,{
      minWidth:'300px',
      maxWidth: '50%'
    })
  }
  }











