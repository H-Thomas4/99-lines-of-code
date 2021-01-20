let friends = [ "Brandy", "Dawana", "Bridgette", "Latonya", "Shunda"];


    for (let i=0; < friends.length; i++) {
        console.log(friends[x] + ":")

        for (let x = 99; x > 0; x--) {
            if (x > 2) 
                console.log(x + " lines of code in the file, "  + i + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file");
            }  if (i === 1){
                console.log(i + " lines of code in the file, "  + i + " lines of code; "  + friends[i] + " strikes one out, clears it all out, " + (i - 1) + " line of code in the file");
            } else{
                console.log(i + " line of code in the file, " + i + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }
    };
