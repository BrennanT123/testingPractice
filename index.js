class testFunctions
{
    constructor()
    {
        this.calculator = 
        {
            add:function(a,b){
                return a+b;
            },
            subtract:function(a,b){
                return a-b;
            },
            multiply: function(a,b){
                return a*b;
            },
            divide: function(a,b){
                return a/b;
            }
        }

    }
    capitalize(string)
    {
        return string.toUpperCase();
    }
    reverseString(string)
    {
        let arr = [...string];
        let reversedString= "";
        for(let i = 0; i<arr.length; i++)
        {
            reversedString = reversedString+arr[arr.length-1-i];
        }
        return reversedString;
    }
    caesarCipher(string,shift)
    {
        shift = shift%26;

        function shiftCharCode(char,shift)
        {
            let charCode = char.charCodeAt(0);

            if (charCode>=65 && charCode <= 90)
            {
                return String.fromCharCode(((charCode - 65 +shift) %26)+65)
            }

            if (charCode>=97 && charCode <= 122)
                {
                    return String.fromCharCode(((charCode - 97 +shift) %26)+97)
                }
                return char;
        }

        return string.split('').map(char => shiftCharCode(char,shift)).join('');

    }
    analyzeArray(arr)
    {
      
        let average = arr.reduce((sum,current) => sum+current,0)/arr.length;
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        let length = arr.length;
        let returnObject = 
        {
            average: average,
            min: min,
            max: max,
            length: length
        }
        return returnObject;
    }
}

module.exports = testFunctions;