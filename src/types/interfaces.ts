export interface IStateProps {
    simpsons:any,
    loading:boolean,
    error:string,
}


export interface ISimpson {
    name: string;
    avatar: string;
    job: string;
    description: string;
    id: string;
}