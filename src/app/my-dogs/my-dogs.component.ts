import {Component, OnInit} from '@angular/core';
import {DogService, FileService} from '@app/_services';
import {Dog} from '@app/_models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-my-dogs',
  templateUrl: './my-dogs.component.html',
  styleUrls: ['./my-dogs.component.less']
})
export class MyDogsComponent implements OnInit {

  constructor(private dogService: DogService, private formBuilder: FormBuilder, private fileService: FileService) {
  }

  dogs: Dog[];
  dogForm: FormGroup;
  submitted = false;
  editMode = false;
  file: File = null;

  ngOnInit(): void {
    this.dogService.getMyDogs().subscribe(item => this.dogs = item);
    this.dogForm = this.formBuilder.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      years: ['', Validators.required],
      months: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  get f() {
    return this.dogForm.controls;
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    this.submitted = true;
    const dog = new Dog();
    dog.name = this.f.name.value;
    dog.sex = +this.f.sex.value;
    dog.isForSale = false;
    dog.months = this.f.months.value;
    dog.years = this.f.years.value;
    this.fileService.upload(this.file).pipe(
      tap((data) => dog.photoUrl = data['data']['display_url']),
      mergeMap(() =>
        this.dogService.addDog(dog))).pipe().subscribe(() => window.location.reload());
    this.editMode = true;
  }

}
