import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageUrl: string = "/assets/img/showimage.jpg";
  fileToUpload: File = null;

  constructor() { }

  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    } 
    reader.readAsDataURL(this.fileToUpload);
  }

}
