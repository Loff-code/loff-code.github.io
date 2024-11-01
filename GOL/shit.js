function main(line) {
    start(line)
}

function start(line) {
    console.log(line);
    let tmp = ""
    for (let cell = 0; cell < line.length; cell++) {
        tmp += born(cntNeig(line, cell), line, cell)
    }
    if (tmp.includes("*")) {
        return start(tmp)  
    }
}

function cntNeig(line, cell){
    let neighbor = 0
    for (let index = -2; index < 3; index++) {
        let go = cell + index
        if (go > 0 && go < line.length) {
            if (line[go] === "*" && index != 0) {
                neighbor += 1
            }
        }
    }
    return neighbor; 
}

function born(neighbors, line, cell) {
    return (((neighbors == 2 || neighbors == 3) && line[cell] == " ") || ((neighbors == 2 || neighbors == 4) && line[cell] == "*")) ? "*" : " "
}

main("    ******    ")
