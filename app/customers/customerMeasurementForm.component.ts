import { Component } from '@angular/core';
import { Customer } from './../../models/customer';
import { Measurement } from './../../models/measurement';
import { CustomerService } from './../../services/customer.Service';
import { MeasurementService } from './../../services/measurement.Service';
import { EmployeeService } from './../../services/employee.Service';
import { Employee } from './../../models/employee';
import { String } from 'core-js/library/web/timers';

declare var $: any;

@Component({
    selector: 'customerMeasurement-form',
    templateUrl: './CustomerMeasurementForm.template.html',
    styleUrls: ['./CustomerMeasurementForm.style.css'],
    providers: [CustomerService, MeasurementService, EmployeeService]
})

export class CustomerMeasurementForm {
    constructor(private _measurementService: MeasurementService,
        private _customerService: CustomerService, private _employeeService: EmployeeService) {
    }

    public newMeasurement;
    public customers: Customer[];
    public employees: Employee[];
    public Employee_Id : String;
    public _Measurement:Measurement;
    public ShalwarKameez: boolean = false;
    public Coat: boolean = false;
    public Sherwani: boolean = false
    public WaistCoat: boolean = false
    public Pant: boolean = false
    public Trouser: boolean = false
    public Shawl:boolean = false;
    public Shoes:boolean = false;
    public CustomerContactName:any;
    public EmployeeId:any;
    searchByName()
    {
        this._customerService.getCustomersByContactName(this.newMeasurement.FullName).subscribe(res => {
            if (res.code == 200) {
                this.customers = res.data;
                $("#snackbar").html("Data is Available");
            
            }
            else {
                this.customers = null;
                $("#snackbar").html("Data not Available");
            }
            console.log("customer for referance is");
            console.log(this.customers);
        });
        this.newMeasurement.CustomerContactName=undefined;
    }
    addMeasurement(): void {
        if (this.ShalwarKameez == true) {
            if (this.newMeasurement.ShalwarKameezLength=="" || this.newMeasurement.ShalwarKameezChest=="" || this.newMeasurement.ShalwarKameezWaist=="" || this.newMeasurement.ShalwarKameezHip=="" || this.newMeasurement.ShalwarKameezSleeve == "" || this.newMeasurement.ShalwarKameezShoulder == "" || this.newMeasurement.ShalwarKameezNeck == "" || this.newMeasurement.ShalwarKameezBysep == "" || this.newMeasurement.ShalwarKameezSLength == "" || this.newMeasurement.ShalwarKameezBottom == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }

            else {
                
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        this.showToast();
                        this.newMeasurement = new Measurement();
                        $("#selectType").hide();
                        this.allFalse();
                        $('.measurementsType option').prop('selected', function () {
                            return this.defaultSelected;
                          });
                    } else {
                        $("#snackbar").html(res.message);
                        this.showToast();
                    }
                });
            }
        }
        else if (this.Coat == true) {
            if (this.newMeasurement.CoatLength=="" || this.newMeasurement.CoatChest=="" || this.newMeasurement.CoatWaist=="" || this.newMeasurement.CoatHip=="" || this.newMeasurement.CoatSleeve == "" || this.newMeasurement.CoatShoulder == "" || this.newMeasurement.CoatNeck == "" || this.newMeasurement.CoatBysep == "" || this.newMeasurement.CoatHB == "" || this.newMeasurement.CoatCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }

            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        this.showToast();
                        this.newMeasurement = new Measurement();
                        $("#selectType").hide();
                        this.allFalse();
                        $('.measurementsType option').prop('selected', function () {
                            return this.defaultSelected;
                          });
                    } else {
                        $("#snackbar").html(res.message);
                        this.showToast();
                    }
                });
            }
        }
        else if (this.Sherwani == true) {
            if (this.newMeasurement.SherwaniLength=="" || this.newMeasurement.SherwaniChest=="" || this.newMeasurement.SherwaniWaist=="" || this.newMeasurement.SherwaniHip=="" || this.newMeasurement.SherwaniSleeve == "" || this.newMeasurement.SherwaniShoulder == "" || this.newMeasurement.SherwaniNeck == "" || this.newMeasurement.SherwaniBysep == "" || this.newMeasurement.SherwaniHB == "" || this.newMeasurement.SherwaniCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }

            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        this.showToast();
                        this.newMeasurement = new Measurement();
                        $("#selectType").hide();
                        this.allFalse();
                        $('.measurementsType option').prop('selected', function () {
                            return this.defaultSelected;
                          });
                    } else {
                        $("#snackbar").html(res.message);
                        this.showToast();
                    }
                });
            }
        }
        else if (this.WaistCoat == true) {
            if (this.newMeasurement.CoatLength=="" || this.newMeasurement.CoatChest=="" || this.newMeasurement.CoatWaist=="" || this.newMeasurement.CoatHip=="" || this.newMeasurement.CoatHip == "" || this.newMeasurement.CoatShoulder == "" || this.newMeasurement.CoatNeck == "" || this.newMeasurement.CoatBysep == "" || this.newMeasurement.CoatHB == "" || this.newMeasurement.CoatCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }

            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        this.showToast();
                        this.newMeasurement = new Measurement();
                        $("#selectType").hide();
                        this.allFalse();
                        $('.measurementsType option').prop('selected', function () {
                            return this.defaultSelected;
                          });
                    } else {
                        $("#snackbar").html(res.message);
                        this.showToast();
                    }
                });
            }
        }
        else if (this.Pant == true) {
            if (this.newMeasurement.PentWaist=="" || this.newMeasurement.PentHip=="" || this.newMeasurement.PentLength=="" || this.newMeasurement.PantKnee=="" || this.newMeasurement.PentBottom == "" || this.newMeasurement.PentInside == "" ) {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }

            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        this.showToast();
                        this.newMeasurement = new Measurement();
                        $("#selectType").hide();
                        this.allFalse();
                        $('.measurementsType option').prop('selected', function () {
                            return this.defaultSelected;
                          });
                    } else {
                        $("#snackbar").html(res.message);
                        this.showToast();
                    }
                });
            }
        }
        else if (this.Trouser == true) {
            if (this.newMeasurement.TrouserWaist=="" || this.newMeasurement.TrouserHip=="" || this.newMeasurement.TrouserLength=="" || this.newMeasurement.TrouserKnee=="" || this.newMeasurement.TrouserBottom == "" || this.newMeasurement.TrouserInside == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }

            else {
              
                console.log('employeeid',this.newMeasurement);
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        this.showToast();
                        this.newMeasurement = new Measurement();
                        $("#selectType").hide();
                        this.allFalse();
                        $('.measurementsType option').prop('selected', function () {
                            return this.defaultSelected;
                          });
                    } else {
                        $("#snackbar").html(res.message);
                        this.showToast();
                    }
                });
            }
        }

        else if(this.Shawl == true){

            if (this.newMeasurement.ShawlLength=="" || this.newMeasurement.ShawlWidth=="") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }else{
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        this.showToast();
                        this.newMeasurement = new Measurement();
                        $("#selectType").hide();
                        this.allFalse();
                        $('.measurementsType option').prop('selected', function () {
                            return this.defaultSelected;
                          });
                    } else {
                        $("#snackbar").html(res.message);
                        this.showToast();
                    }
                });
            }

        }else if(this.Shoes == true){
            this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
                console.log(res);
                if (res.code == 200) {
                    $("#snackbar").html("Values Saved!");
                    this.showToast();
                    this.newMeasurement = new Measurement();
                    $("#selectType").hide();
                    $('.measurementsType option').prop('selected', function () {
                        return this.defaultSelected;
                      });
                    this.allFalse();
                } else {
                    $("#snackbar").html(res.message);
                    this.showToast();
                }
            });
        }
        else {
            $("#snackbar").html("Please Select Right Choice");
            this.showToast();

        }

    }

    search(): void {
        this._customerService.getCustomersByContactNumber(this.newMeasurement.CustomerContactNumber).subscribe(res => {
            if (res.code == 200) {
                this.customers = res.data;
            }
            else {
                this.customers = null;
            }
            console.log("customer for referance is");
            console.log(this.customers);
        });
    }


    showToast() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar")

        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }

    onChange(_id: string): void {
        console.log("CHange is Clicked" + _id);
        this.newMeasurement.CustomerId = _id;
        $("#selectType").show();
    }


    allFalse() {

        this.Sherwani = false;
        this.WaistCoat = false;
        this.Coat = false;
        this.ShalwarKameez = false;
        this.Pant = false;
        this.Trouser = false;

    }

    getForms(elem) {
        
        $("#selectEmployee").show();

        if (elem == "Shalwar Kameez") {

            this.allFalse();
            this.ShalwarKameez = true;

        } else if (elem == "Coat") {
            this.allFalse();
            this.Coat = true;
        } else if (elem == "Sherwani") {
            this.allFalse();
            this.Sherwani = true;
        } else if (elem == "Waist Coat") {
            this.allFalse();
            this.WaistCoat = true;
        } else if (elem == "Pant") {
            this.allFalse();
            this.Pant = true;
        } else if(elem == "Shawl"){
            this.allFalse();
            this.Shawl = true;
        }
        else{
            this.allFalse();
            this.Shoes = true;
        }

    }


    getEmployeesShalwarKameezId(employeesId) {
       /*  this.Employee_Id = employeesId;
        console.log(this.Employee_Id);
        this._Measurement =new Measurement();
        this._Measurement.ShalwarKameezMeasurementTakenBy=this.Employee_Id;
      this.newMeasurement.ShalwarKameezMeasurementTakenBy=this.Employee_Id;
        console.log('employeeid',this.newMeasurement); */
        this.EmployeeId = employeesId;
    }
    getEmployeesSherwaniId(employeesId) {
        this._Measurement =new Measurement();
        this.Employee_Id = employeesId;
        this._Measurement.SherwaniMeasurementTakenBy=this.Employee_Id;
        this.newMeasurement.SherwaniMeasurementTakenBy=this.Employee_Id;
        console.log('employeeid',this.newMeasurement);
    }
    getEmployeesWaistCoatId(employeesId) {
        this._Measurement =new Measurement();
        this.Employee_Id = employeesId;
    this._Measurement.WaistCoatMeasurementTakenBy=this.Employee_Id;
    this.newMeasurement.WaistCoatMeasurementTakenBy=this.Employee_Id;
    console.log('employeeid',this.newMeasurement);
    }
    getEmployeesPantId(employeesId) {
        this._Measurement =new Measurement();
        this.Employee_Id = employeesId;
    this._Measurement.PentMeasurementTakenBy=this.Employee_Id;
    this.newMeasurement.PentMeasurementTakenBy=this.Employee_Id;
    console.log('employeeid',this.newMeasurement);
    }
    getEmployeesCoatId(employeesId) {   
        this._Measurement =new Measurement();
        this.Employee_Id = employeesId;
   this._Measurement.CoatMeasurementTakenBy=this.Employee_Id;
   this.newMeasurement.CoatMeasurementTakenBy=this.Employee_Id;
   console.log('employeeid',this.newMeasurement);
    }
    getEmployeesTrouserId(employeesId) 
    {
        this._Measurement =new Measurement();
        this.Employee_Id = employeesId;
    this._Measurement.TrouserMeasurementTakenBy=this.Employee_Id;
    this.newMeasurement.TrouserMeasurementTakenBy=this.Employee_Id;
    console.log('employeeid',this.newMeasurement);
    }



    ngOnInit(): void {
        this.newMeasurement = new Measurement();
        this._employeeService.getEmployees().subscribe(res => {
            if (res.code == 200) {
                this.employees = res.data;
                console.log('Employeesss', this.employees);

            }
            else {
                this.employees = null;
            }
            console.log("Employees Received are");
            console.log(this.employees);
        });
    }

}