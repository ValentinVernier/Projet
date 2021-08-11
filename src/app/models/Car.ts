export class Car{
    public name:string;
    public country:string;
    public coverImage:string;
    public power: number;
    public perf: number;

    constructor(name:string,country:string,coverImage:string,power:number,perf:number){
        this.name = name;
        this.country = country;
        this.coverImage = coverImage;
        this.power = power;
        this.perf = perf;
    }
}
