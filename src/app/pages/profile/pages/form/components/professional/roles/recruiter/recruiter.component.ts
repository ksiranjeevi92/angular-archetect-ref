import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Dictionaries } from '@app/store/dictionaries';

export interface RecruiterForm {
    companyName: string;
    employeesCount: number;
}

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit, OnDestroy {

    @Input() parent: UntypedFormGroup;
    @Input() name: string;

    @Input() value: RecruiterForm;
    @Input() dictionaries: Dictionaries;

    form: UntypedFormGroup;

    constructor(
        private fb: UntypedFormBuilder
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            companyName: [null, {
                updateOn: 'blur', validators: [
                    Validators.required
                ]
            }],
            employeesCount: [null, {
                updateOn: 'blur', validators: [
                    Validators.required
                ]
            }]
        });

        if (this.value) {
            this.form.patchValue(this.value);
        }

        this.parent.addControl(this.name, this.form);
    }

    ngOnDestroy(): void {
        this.parent.removeControl(this.name);
    }

}
