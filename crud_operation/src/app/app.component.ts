import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from './common/user.service';
import { User } from './common/user.interface';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { DBOperation } from './db-opeations';
import { MustMatch } from './common/must.match.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'User Registration Form - Add,Edit,Update,Delete';
  // addform: FormGroup = new FormGroup({})
  addform: FormGroup;
  submitted: boolean = false;
  users: User[] = [];
  buttontext: string;
  dbops: DBOperation;
  @ViewChild('nav') elfile: any;

  constructor(private _userService: UserService, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.setFormState();
    this.getUsers();
  }

  setFormState() {

    this.buttontext = "Save";
    this.dbops = DBOperation.add;

    this.addform = new FormGroup({
      // this.addform = this._fb.group({
      id: new FormControl(0),
      title: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])),
      // email: new FormControl ('', Validators.compose([Validators.pattern(//)]))
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      dob: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      confirmpassword: new FormControl('', Validators.compose([Validators.required])),
      acceptterms: new FormControl(false, Validators.requiredTrue)
    },

    MustMatch("password","confirmpassword")
    
    );
  }

  get ctrl() {
    return this.addform.controls
  }

  register() {
    this.submitted = true;
    // console.log(this.addform.value);
    if (this.addform.invalid) {
      return;
    }

    switch (this.dbops) {
      case DBOperation.add:
        this._userService.addUser(this.addform.value).subscribe(res => {
          this._toastrService.success("User Added Successfully", "User Registration");
          this.getUsers();
          this.resetform();
          this.elfile.select('viewtab');
        });
        break;
      case DBOperation.update:
        this._userService.updateUser(this.addform.value).subscribe(res => {
          this._toastrService.success("User Updated Successfully", "User Registration");
          this.getUsers();
          this.resetform();
          this.elfile.select('viewtab');
        });
        break;
    }

  };

  resetform() {
    this.submitted = false;
    this.addform.reset();

    this.buttontext = "Save";
    this.dbops = DBOperation.add;
  };

  tabChange() {
    this.resetform();
  };

  getUsers() {
    this._userService.getAllUsers().subscribe((res: User[]) => {
      this.users = res;
      // console.log(this.users);
    });
  }

  edit(Id: number) {
    this.buttontext = "Update";
    this.dbops = DBOperation.update;

    let user = this.users.find((u: User) => u.id === Id);
    this.addform.patchValue(user);
    this.addform.get('password').setValue('');
    this.addform.get('confirmpassword').setValue('');
    this.addform.get('acceptterms').setValue(false);
    this.elfile.select('addtab');
  }

  delete(Id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._userService.deleteUser(Id).subscribe(res => {
          this._toastrService.success("Record Deleted", "User Registration");
          this.getUsers();
        });
        // swalWithBootstrapButtons.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })


  }

}
