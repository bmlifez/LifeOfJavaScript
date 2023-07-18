// Advanced curry Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c). 
// JavaScript implementations usually both keep the function callable normally and return 
// the partial if the arguments count is not enough.


function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args);
        } else {
            return function(...args2){
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args);
        } else {
            return function(...args2){
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}