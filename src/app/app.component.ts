import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    checkboxState = false;
    public onCheckboxStateChange(value: boolean): void {
        console.log('Checkbox State: ' + value);
        this.checkboxState = value;
    }
    public onClick(): void {
        this.checkboxState = null;
    }
}
