import { Component , OnInit} from '@angular/core';
import {FormBuilder,FormGroup } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Order Details';
  orderForm : FormGroup;

  ItemData=[
    {},{}
]
  constructor(private fb :FormBuilder, private httpClient: HttpClient)
  {
    
  }
  ngOnInit()
  {
    
    this.createform();
  }
createform()
{
  let arr=[];
  for(let i=0;i< this.ItemData.length;i++)
  {   
    arr.push(this.BuildFormDynamic(this.ItemData[i]))
   
  }
    this.orderForm =  this.fb.group({
      
      method: [''],
      currency: [''],
      invoice_type: [''],
      payment_type: [''],
      delivery_id: [''],
      order_id: [''],
      tripid: [''],
      salesman_id: [''],
      customerid: [''],
      invoiceNo: [''],
      invoice_date: [''],
      due_date: [''],
      payment_term: [''],
      price_list: [''],
      gross_total: [''],
      excise: [''],
      vat: [''],
      pre_vat: [''],
      net_total: [''],
      discount: [''],
      total_amount: [''],
      ItemDetails:this.fb.array(arr)
    })
}
BuildFormDynamic(ItemDatas):FormGroup{
 return this.fb.group({
  item_id:[''],
  itemvalue:[''],
       uom:[''],
       quantity :[''],
       vat:[''],
       pre_vat:[''],
       excies:[''],
       discount:[''],
       discount_amount:[''],
       net_total:[''],
       item_total:['']
  })
}

  SaveData()
  {
    //console.log(this.orderForm.value);
    this.httpClient.post("https://osa-dev.harissint.com/API/transction.php", this.orderForm.value).subscribe(
      data => console.log("POST Request is successful ", data),
      error => console.log("Error", error));
  }
  
}
