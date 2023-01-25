let targets = []
for(let i=1; i <= 10000; i ++){
    targets.push(i)
}

 function selfNum(a){
    let strNum = String(a)
    let sumNum = 0
    for(let i=0; i < strNum.length; i ++){
        sumNum += Number(strNum[i])
    }
    return a + sumNum
}

for (let j = 1; j <= 10000; j++){
    if (targets.includes(j)){
        let cur = j
        while ( cur <= 10000){
            let next = selfNum(cur)
            if(next > 10000 || !targets.includes(next)){break} else {
                let targetIdx = targets.indexOf(next)
                targets.splice(targetIdx, 1)
                cur = next
            }
        }
    }
}

for (let target of targets){
console.log(target)}