import { AbstractControl } from '@angular/forms';

export class CustomValidator {
    static isTest(control: AbstractControl){
        const value = control.value;
        if(value == "test") {
            return {is_test: true};
        }
        return null;
    }
}