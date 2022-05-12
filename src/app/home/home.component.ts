import { AfterViewInit, Component, HostBinding, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { first } from 'rxjs';
import { ModulesProvider } from '../utils/modules-provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @HostBinding() class: string = "d-flex flex-column h-100";

  @ViewChild("ngContainerRef", { read: ViewContainerRef }) ngContainerRef: ViewContainerRef;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
  }

  loadComponent(index: number): void {
    this.ngContainerRef.clear();

    ModulesProvider
      .getComponent(index)
      .pipe(first())
      .subscribe(t => this.ngContainerRef.createComponent(t));
  }

}
