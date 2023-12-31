// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
//   console.log(userInput)

  console.log(sol(userInput));

  //end-here
});

let sol = (data) => {
    // console.log(data)
    let num = data[0].split(" ").map(Number);
    let mat = [];
    let arr = [];
    let result = [];
    let qualities; 
    for(let i = 1;i<=num[0];i++){
        arr = data[i].split(" ").map(Number);
        mat.push(arr);
    }
    // console.log(mat);
    for(let i=0;i<num[0];i++){
        for(let j=0;j<num[1];j++){
            qualities = 0;
            if(mat[i][j]==0){
                continue;
            }else{
                if(i>0&&(mat[i-1][j]==1) ){
                    qualities+=1;
                }
                if(i>0 && j<num[1]-1 && (mat[i-1][j+1]==1)){
                    qualities+=1;
                }
                if( j<num[1]-1 && (mat[i][j+1]==1)){
                    qualities+=1 
                }
                if(j<num[1]-1 && i<num[0]-1 && (mat[i+1][j+1]==1)){
                    qualities+=1;
                }
                if(i<num[0]-1 && (mat[i+1][j]==1)){
                    qualities+=1;
                }
                if(i<num[0]-1 && j>0 && (mat[i+1][j-1]==1)){
                    qualities+=1;
                }
                if(  j>0 && (mat[i][j-1]==1)){
                    qualities+=1;
                }
                if(j>0 && i>0 && (mat[i-1][j-1]==1)){
                    qualities+=1;
                }
            }
            if(qualities>0){
                if(!result[qualities]){
                    result[qualities]=[[i,j]]
                }
                else{
                    result[qualities].push([i,j])
                }
            }
        }
    }
    // for(let i=0;i<result.length;i++){
    //     console.log(result[i],i);
    // }
    
    if(result.length==0){
        return "No suitable girl found";
    }else{
        // console.log(result[result.length-1].length)
        if(result[result.length-1].length==1){
            // console.log((result[result.length-1][0][0]+1)+":"+(result[result.length-1][0][1]+1)+":"+(result.length-1))
            return ((result[result.length-1][0][0]+1)+":"+(result[result.length-1][0][1]+1)+":"+(result.length-1));
        }else{
            let sn = 0;
            let sum = result[result.length-1][0][0]+result[result.length-1][0][1];
            let flag = 0;
            let flagnum = 0;
            for(i = 1;i<result[result.length-1].length;i++){
                if(sum>(result[result.length-1][i][0]+result[result.length-1][i][1])){
                    sn = i;
                    sum = result[result.length-1][i][0]+result[result.length-1][i][1]
                }else if(sum==result[result.length-1][i][0]+result[result.length-1][i][1]){
                    flag = 1;
                    flagnum = result[result.length-1][i][0]+result[result.length-1][i][1];
                }
            }
            if(flag==0){
                // console.log("if call",sn,(result[result.length-1][sn][0]+1)+":"+(result[result.length-1][sn][1]+1)+":"+(result.length-1))
                return ((result[result.length-1][sn][0]+1)+":"+(result[result.length-1][sn][1]+1)+":"+(result.length-1));
            }else if(sum==flagnum){
                return "He's not interested in polygamy";
            }else{
                // console.log("else call")
                return ((result[result.length-1][sn][0]+1)+":"+(result[result.length-1][sn][1]+1)+":"+(result.length-1));
            }
        }
    }
}
