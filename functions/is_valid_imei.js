function sumDig(n)
    {
        let a = 0;
        while (n > 0)
        {
            a = a + n % 10;
            n = parseInt(n / 10, 10);
        }
        return a;
    }
    
    function isValidIMEI(n)
    {
        let N=parseInt(n,10);
        let s1=N.toString();
        console.log(`in function`)
        let s2 = n.toString();
        //console.log(s)
        let len2 = s2.length;
        //console.log(len2)
        let len1 = s1.length;
        //console.log(len1)
        if(len1 != len2){
            return false;
        }
        if (len2 != 15)
            return false;

        let sum = 0;
        //console.log(n)
        for(let i = len1; i >= 1; i--)
        {
            let d = (n % 10);

            if (i % 2 == 0)
                d = 2 * d;

            sum += sumDig(d);
            n = parseInt(n / 10, 10);
            //console.log(n)
        }

        return (sum % 10 == 0);
    }
    
module.exports = isValidIMEI

