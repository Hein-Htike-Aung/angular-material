import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
  logOnChange(index: any) {
    console.log(index);
  }
}
