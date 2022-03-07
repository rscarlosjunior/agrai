export interface IContents {
    about?: {
        slogan: ISlogan
    },
    home?: {
        slogan: ISlogan
    },
  }
  export interface ISlogan {
    title_mobile: string,
    title_desk: string,
    description:string,
    buttons: boolean,
    img: string
  }
  export interface IEmptyGrayspace {
    img?: string,    
    RightTitle?:string,
    RightSubtitle?:string,
    leftTitle?:string,
    RightDescription?:string
  }