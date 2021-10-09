export namespace MyFra {


    /**
     * hook soul 绕过模拟器检查
     */
    export function hook_sool() {
        Java.perform(function () {
            var c = Java.use("cn.soulapp.android.utils.j");
            c.e.implementation = function () {
                return false;
            }
        });
    }



}

