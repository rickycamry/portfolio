import { Component, Input, OnInit, Inject } from '@angular/core';
import { Publisher } from 'src/app/core/interfaces/publisher';
import { PublisherService } from './publisher.services';
import { Toastr, TOASTR_TOKEN } from 'src/app/core/interfaces/toastr';
import { JQUERY_TOKEN } from 'src/app/core/interfaces/jquery';
import { $ } from 'protractor';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector:'book-publisher',
    templateUrl:'book-publisher.component.html'

})
export class BookPublisherComponent implements OnInit{

    bookId:number;
    publisher:Publisher;
    pageTitle:string='Book publisher';
    modalId:string='publisher-modal';
    edithasPublisherMode=false;

    constructor(private publisherService:PublisherService,
                @Inject(TOASTR_TOKEN) private toast:Toastr,
                @Inject(JQUERY_TOKEN) private $:any,
                private activetedRouter:ActivatedRoute){

                    this.publisher=<Publisher>{};
                    this.bookId=+this.activetedRouter.snapshot.params["id"];
              
    }


    ngOnInit(){
        this.publisherService.getPublisherByBookId(this.bookId).subscribe(resp=>{
            

            if(resp){

                this.edithasPublisherMode=true;
                this.publisher=resp;}
                else{
                    this.edithasPublisherMode=false;
                }
        },error=>this.toast.error(error));

    }


    onSubmit(form){

         if(form.valid){

            this.publisherService.updatePublisher(this.publisher,this.bookId)
                                 .subscribe(x=>{
                                 this.$(`#${this.modalId}`).modal('hide');   
                                 this.toast.success(`The publisher "${this.publisher.Name}" has been successfully updated.`);
                                 },error=>this.toast.error(error));
         }


    }


    onDelete(){

        if(confirm(`Are you sure to delete the publisher "${this.publisher.Name}".`)){

            this.publisherService.deletePublisher(this.bookId,this.publisher.Id)
                                 .subscribe(resp=>{
                                     this.toast.success(`The publisher "${this.publisher.Name}" has been deleted.`);
                                     this.publisher=<Publisher>{};
                                 this.edithasPublisherMode=false;
                                 },error=>this.toast.error(error))
        }
    }


    openModal(){
        this.$(`#${this.modalId}`).modal('show');  

    }

    onModalOpen(){

            //console.log(this.publisher);
        
            this.openModal();

        // this.publisherService.getPublisherByBookId(this.bookId).subscribe(resp=>{
        //     this.publisher=resp;
        //     this.openModal();
        // },error=>this.toast.error(error));


    }

}