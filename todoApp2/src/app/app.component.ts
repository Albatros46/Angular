import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Servet Akçadağ';
  items=[
    {faaliyet:"Kahvaltı", durum:"Hayır"},
    {faaliyet:"Sinema", durum:"Evet"},
    {faaliyet:"Tiyatro", durum:"Hayır"},
    {faaliyet:"Seyahat", durum:"Hayır"},
    {faaliyet:"Spor", durum:"Evet"},
    {faaliyet:"Dağcılık", durum:"Hayır"},
    {faaliyet:"Yüzme", durum:"Evet"},
    {faaliyet:"Dalış", durum:"Hayır"},
    {faaliyet:"Paraşüt", durum:"Hayır"}
  ]
}
