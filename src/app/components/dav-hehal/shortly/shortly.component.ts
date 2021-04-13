import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var require: any;

@Component({
  selector: 'app-shortly',
  templateUrl: './shortly.component.html',
  styleUrls: ['./shortly.component.css']
})
export class ShortlyComponent implements OnInit {

  inputvalue: string;
  inputarray = [2, 3, 10, 15, 26, 35, 50, 63]
  min: number;
  submit: boolean = false;
  max: number;
  constructor(private http: HttpClient,) { }

  ngOnInit() {

    this.min = 0;
    this.max = this.inputarray.length - 1;

  }
  Submit() {
    this.submit = true;
  }
  // FormSubmit() {
  //   this.loader = true;
  //   if (this.shortenlink.length > 0) {
  //     for (var k of this.shortenlink) {
  //       if (k.name == this.urlvalue) {
  //         this.loader = false;
  //         alert("This Url is already sorted and its sorten link is present in below list")
  //         return;

  //       }
  //     }
  //   }
  //   this.http.get('https://api.shrtco.de/v2/shorten?url=' + this.urlvalue).subscribe((respondisk: any) => {
  //     console.log(respondisk)
  //     if (respondisk.ok) {
  //       this.loader = false;
  //       let obj: any = {};
  //       obj["name"] = this.urlvalue
  //       obj["shortenurl"] = respondisk.result.short_link;
  //       this.shortenlink.push(obj);
  //       sessionStorage.setItem("data", JSON.stringify(this.shortenlink));
  //     }
  //   },
  //     (e) => {
  //       let tmperr = e.error.error;

  //       this.msg = tmperr.split(",")[0];
  //       this.validate = true;
  //       this.loader = false;
  //     });

  // }
  // validateurl(value: any) {
  //   var validUrl = "dssdds";
  //   // if (validUrl.isUri(value)) {
  //   //   this.validate = false;
  //   //   console.log('Looks like an URI');
  //   // }
  //   // else {
  //   //   this.validate = true;
  //   // }
  // }
  // inputchange(e: any) {
  //   this.validateurl(e.target.value)
  // }
}
