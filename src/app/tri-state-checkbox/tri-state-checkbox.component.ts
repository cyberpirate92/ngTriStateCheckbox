import {
    Component,
    Input,
    Output,
    OnChanges,
    ViewChild,
    EventEmitter,
    ElementRef,
    forwardRef,
    SimpleChanges
} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tri-state-checkbox',
    template: `<input #theCheckbox type="checkbox" [(ngModel)]="value" (click)="onClick($event)">`
})

export class TriStateCheckboxComponent implements OnChanges {
    public value = false;

    @Input() state: any;
    @Output() onStateChange: EventEmitter<boolean>;
    @ViewChild('theCheckbox') checkbox;

    constructor() {
        this.state = false;
        this.onStateChange = new EventEmitter<boolean>();
    }

    public ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        if (changes.state) {
            if (this.state === null) {
                this.value = true;
                this.checkbox.nativeElement.indeterminate = true;
            } else if (this.state === true || this.state === false) {
                this.checkbox.nativeElement.indeterminate = false;
                this.value = this.state;
            }
        }
    }

    public onClick(event: any): void {
        this.onStateChange.emit(!this.value);
        this.state = !this.value;
    }
}
