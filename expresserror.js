class expresserro extends Error{  //class be any name


    constructor(status,message){

        super();
        this.status=status;
        this.message=message;
    }


}

module.exports = expresserro;