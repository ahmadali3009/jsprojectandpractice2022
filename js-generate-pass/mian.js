class Password
{
    constructor()
    {
        this.charS = "abcdefghijklmnopqrstuvwxyz"
        this.charL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.pass = "";

    }
    generatePassword(len)
    {
        
        
        while(len >= 3)
        {
            this.pass += this.charS[Math.floor(Math.random()*this.charS.length)];
            this.pass += this.charL[Math.floor(Math.random()*this.charL.length)];

            len -= 2; // Reduce the required length by 2 for each iteration
        }
    
        if (len > 0) {
          // If there are still characters left to generate
          this.pass += this.charS[Math.floor(Math.random() * this.charS.length)];
          len--;
        }
    
        console.log(`${this.pass} len is smaller than 3 pls add char more then 3`);
        return this.pass;
      }
    }
let p = new Password()
console.log(p.generatePassword(12));