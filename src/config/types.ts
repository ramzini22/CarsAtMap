export type IUser={
    id:string
    name:string
    phone:string
}
export type ICategoryCar= 'B' | 'C' | 'D' | 'ALL'
export interface ICar{
    id:string
    ts:string
    location: [number, number]
    category: ICategoryCar
    user:IUser
}

export type ILanguages = 'rus' | 'eng'

export type ILang={
    nav:string[]
    settings:{
        button:string
    }
    lang:ILanguages
    filter:{
        title:string
        checkList: {label:string, value:ICategoryCar}[]
        button:string
        items: {
            name: string
            userName: string
            category: string
        }
    }
    car: {
        title: string
        textButton: string
        textOnWhatsUP: string
        phoneButton:string
        phoneText:string
    }
}