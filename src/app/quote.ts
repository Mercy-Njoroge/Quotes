export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string,public author: string,public submittedBy: string,public completeDate: Date){
        this.showDescription=false;
      }
    }
