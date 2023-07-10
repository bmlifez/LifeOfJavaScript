const wait = (interval) => {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        },interval);
    })
}

// Approach 1: using then .. catch block
const nativeRetryPromises = (asyncFn, retry = 3, delay = 3000, failedMessgae = 'Failed API , log error') => {
    return new Promise((res, rej) => {
        asyncFn.then(res).catch((reason) => {
            if (retry <= 0){
                return rej(failedMessgae);
            }
            return wait(delay).then(() => {
                nativeRetryPromises(asyncFn, retry-1, delay, failedMessgae).then(res).catch(rej);
            })
        })
    })
};


// async and await solution
const retryPromises = async (asyncFn, retry = 3, delay = 3000, failedMessgae = 'Failed API , log error') => {
    try {
        await asyncFn();
    } catch (error) {
        if(retry<=0){
            return Promise.reject(failedMessgae);
        }
        await wait(delay);
        return retryPromises(asyncFn, retry-1, delay, failedMessgae);
    } 
};

export default retryPromises;