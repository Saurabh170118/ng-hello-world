import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <h2> Welcome {{name}}
  </h2>
  <h2> Welcome {{2+2}}
  </h2>
  <h2>{{name.toUpperCase()}}
  </h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  <input type="text" value ="Code"><br><br>
  <input [disabled]="false" id="{{myId}}" type="text" value ="Saurabh">
  <h2 class="text-danger">Welcome Code</h2>
  <h2 [class]="successClass">Welcome Code</h2>
  <h2 [style.color]="hasError ? 'red' : 'green' ">Style Binding</h2>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='Welcome to world'">Greet</button>
  {{greeting}}
  <hr>
  <h2>Login</h2>
  <input #myInput type="text">
  <button (click)= "logMessage(myInput.value)">Log</button>
  <hr>
<!----------------------ngIf------------------------------>
<h2>Using ngIf</h2>
  <input type="radio" name="rdio1" (click)="changevalue(true)">True
  <input type="radio" name="rdio1" (click)="changevalue(false)">False
  <div *ngIf="isvalid">
  This is valid data
  </div>
  <div *ngIf="!isvalid">
  This is not valid data
  </div>
  <hr>
  <!----------------------ngIf with ngSwitch------------------------------>
<h2>Using ng Switch</h2>
<select (change)="setvalue($event)">
<option value="">--select--</option>
<option value="one">One</option>
<option value="two">Two</option>
<option value="three">Three</option>
<option value="another">Another</option>
</select>
<div [ngSwitch]="choose">
<h3 *ngSwitchCase="'one'">First</h3>
<h3 *ngSwitchCase="'two'">Second</h3>
<h3 *ngSwitchCase="'three'">Third</h3>
<h3 *ngSwitchDefault>Default</h3>
</div>
<hr>
<!------------ngFor---------------------------->
<h2>Using ngFor</h2>
<ul>
<li *ngFor="let student of Students; let i=index; let ev=even; let od=odd">
{{i+1}}-{{student.name}}-{{ev}}-{{od}}
</li>
</ul> 
<hr>
<!-----------------ngStyle----------------------->
<h2>ngStyle Example</h2>
<ul *ngFor="let person of people">
<li [ngStyle]="{'color':getcolor(person.Country)}">
{{person.name}}-({{person.Country}})
</li>
</ul>
<hr>
<!------------------ng-container------------------------->
<h2> ng-container Example</h2>
<table>
<tbody>

<ng-container *ngFor="let book of books">
<tr>
<td>{{book.name}}</td>
<td>{{book.name}}</td>
<td>{{book.name}}</td>
<td>{{book.name}}</td>
<td>{{book.name}}</td>
</tr>

</ng-container>

<ng-container *ngFor="let database of databases">
<tr>
<td>{{database.name}}</td>
<td>{{database.name}}</td>
<td>{{database.name}}</td>
<td>{{database.name}}</td>
<td>{{database.name}}</td>
</tr>

</ng-container>


</tbody>
</table>
<hr>
// <!-------------------------------------------------------------->

`
,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
    font-style:italic;
  }
  .text-success{
    color:green;
  }
  `
]
})
export class TestComponent implements OnInit {
  public name = "Saurabh";
  public siteUrl = window.location.href;
  public myId = "testId";
  public successClass = "text-success";
  public hasError = true;
  public greeting = "";

  // <!---------------------ngIf------------------------------->
  isvalid:boolean=true;
  changevalue(valid){
    this.isvalid=valid;
  }


  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Holla" + " " + this.name;
  }

  onClick(event){
    console.log(event);
    this.greeting = 'Testing the code';
  }

  // logMessage(value){
  //   console.log(value);
  // }
// <!------------ngSwitch---------------------------->
public choose ='';
setvalue(drp:any)
{
  this.choose=drp.target.value;
}
// <!------------ngFor---------------------------->
Students:any[]=[
  {
    'name':'Saurabh Choudhary'
  },
  {
    'name':'Vikram Sinwal'
  },
  {
    'name':'Shubham Mishra'
  },
  {
    'name':'Swati Mann'
  },
  {
    'name':'Jyoti'
  }
];
// <!---------------------------------------->
// <!------------ngStyle---------------------------->
people:any[]=[
  {
    "name":"Saurabh Choudhary",
    "Country":'India'
  },
  {
    "name":"Vikram Sinwal",
    "Country":'UK'
  },
  {
    "name":"Shubham Mishra",
    "Country":'India'
  },
  {
    "name":"Swati Mann",
    "Country":'USA'
  },
  {
    "name":"Jyoti Khub",
    "Country":'UK'
  },
];
getcolor(Country){
  switch(Country)
  {
    case 'India':
    return 'green';
    case 'UK':
    return 'blue';
    case 'USA':
    return 'red';
  }
}


// <!------------------------------------------->
books=[
  {id:1, name:'Asp.Net', price:'125'},
  {id:1, name:'Java', Price:'250'},
  {id:1, name:'Html', Price:'25'},
  {id:1, name:'Php', Price:'205'},
  {id:1, name:'Angular', Price:'725'},
];
databases=[
  {id:1, name:'MongoDb', Price:'125'},
  {id:1, name:'MySql', Price:'250'},
  {id:1, name:'NoSql', Price:'25'},
  {id:1, name:'Xyz', Price:'205'},
  {id:1, name:'MongoDb', Price:'725'},
];


}
