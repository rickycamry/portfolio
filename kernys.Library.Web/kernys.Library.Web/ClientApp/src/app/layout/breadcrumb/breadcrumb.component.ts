import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import {filter} from "rxjs/operators";

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: "breadcrumb",
  template: `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item" *ngFor="let breadcrumb of breadcrumbs">
    <a [routerLink]="[breadcrumb.url]">{{ breadcrumb.label }}</a>
    </li>
   </ol>
   <button (click)="showArray()">show array</button>
</nav>     
  `
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];

  /**
   * @class DetailComponent
   * @constructor
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  /**
   * Let's go!
   *
   * @class DetailComponent
   * @method ngOnInit
   */
  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";


    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
      
    console.log('executed...')
       //set breadcrumbs
       let root: ActivatedRoute = this.activatedRoute.root;
       this.breadcrumbs = this.getBreadcrumbs(root);
  });

  //   subscribe to the NavigationEnd event
  //   this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
  //     set breadcrumbs
  //     let root: ActivatedRoute = this.activatedRoute.root;
  //     this.breadcrumbs = this.getBreadcrumbs(root);
  //   });
  // }
}

showArray():void{
  console.log(this.breadcrumbs.length);
}

   getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //get the child routes
    let children: ActivatedRoute[] = route.children;

    //return if there are no more children
    if (children.length === 0) {
      return this.breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, this.breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
      this.breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, this.breadcrumbs);
    }
  }

}