let p1 = new Promise((res,rej)=>{
	return res(1);
})

let p2 = new Promise((res,rej)=>{
	return rej(2);
})

Promise.all([p1,p2]).then((res)=>{
	console.log('res',res);
}).catch((err)=>{
	console.log('err',err);
})

// 1. Promise.all if there is single error it will always go 
// in catch block