Array.prototype.delete = function(index){
    this.splice(index,1);
    this;
    return this;
}

[1,2,3,4,5,6].delete(2);