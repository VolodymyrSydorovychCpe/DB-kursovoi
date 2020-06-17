import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'keyvalue'})
export class KeyvaluePipe implements PipeTransform {
    transform(map: Map<any, any>): any[] {
        let ret = [];

        map.forEach((value, key) => {
            ret.push({
                key: key,
                value: value
            });
        });
        return ret;
    }
}
