import { Component, OnInit, ElementRef } from '@angular/core'

@Component({
  selector: 'app-surfing',
  templateUrl: './surfing.component.html',
  styleUrls: ['./surfing.component.css']
})

export class SurfingComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    const s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "/assets/launch.js";
    this.elementRef.nativeElement.appendChild(s2);
  }
}
