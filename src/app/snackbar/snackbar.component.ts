import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar(value: string, action: string) {
    let snackBarRef = this.snackBar.open(value, action, { duration: 2000 });

    snackBarRef.onAction().subscribe(() => {
      console.log('The Snackbar was triggered');
    });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The Snackbar was dismissed');
    });
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomerSnackBarComponent, {
      duration: 200,
    });
  }
}

@Component({
  selector: 'custom-snackbar',
  template: `<span style="color: orange;">Custom Snackbar</span>`,
})
export class CustomerSnackBarComponent {}
