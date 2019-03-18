import { Component, OnInit } from '@angular/core';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listData;
  tableHeader=["name", "capital", "region", "population"];
  Detaillist=["name","alpha2Code","subregion","capital", "region", "population","area", "nativeName", "numericCode", "flag"];
  closeResult: string;
  letDetailData;
  indexVal;
  constructor(private http: HttpClient, private modalService: NgbModal) {
  }
  getlist() {
  	this.http.get("https://restcountries.eu/rest/v2/all").toPromise().then((data) => {
  		console.log(data);
  		this.listData=data;
    });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onRow(list, index){
  	this.indexVal=index;
  	this.letDetailData=list;
  }
  ngOnInit() {
        this.getlist();
    }
}
