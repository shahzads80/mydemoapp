import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function MustMatch(psw: string, cnfpsw:string) : ValidatorFn{
    return (ctrl : AbstractControl) : ValidationErrors | null => {
        const passwordCtrl = ctrl.get(psw);
        const confirmpasswordCtrl = ctrl.get(cnfpsw);

        if(confirmpasswordCtrl.errors && !confirmpasswordCtrl.errors['mustmatch']){
            return null;
        }

        if(passwordCtrl.value !== confirmpasswordCtrl.value){
            confirmpasswordCtrl.setErrors({mustmatch :true});
        }else{
            confirmpasswordCtrl.setErrors(null);
        }


        return null;
    }
    
}