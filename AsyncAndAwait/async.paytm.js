(async function () {
    function fn1() { return 2; }

    async function fn2() { return 2; }


    const result1 = fn1();

    const result2 = await fn1();

    const result3 = fn2();

    const result4 = await fn2();

}())