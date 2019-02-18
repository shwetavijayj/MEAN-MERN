export class EmpData {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: number,
        public address: string,
        public city: string,
        public state: string,
        public zipCode: number,
        public comment: string
    ) {

    }
}

export const states = ["Maharashtra", "Punjab", "Madhyapradesh", "West Bengal"];
export const EmpData1: Array<EmpData> = new Array<EmpData>();
