function getValidMoves(coords){
    let allMoves = [], validMoves = [];

    allMoves.push([coords[0] - 2, coords[1] - 1]); 
    allMoves.push([coords[0] - 2, coords[1] + 1]); 
    allMoves.push([coords[0] - 1, coords[1] - 2]); 
    allMoves.push([coords[0] - 1, coords[1] + 2]); 
    allMoves.push([coords[0] + 1, coords[1] - 2]); 
    allMoves.push([coords[0] + 1, coords[1] + 2]); 
    allMoves.push([coords[0] + 2, coords[1] - 1]); 
    allMoves.push([coords[0] + 2, coords[1] + 1]); 


    allMoves.forEach(move => {
        if ((move[0] < 0 || move[0] > 7) || (move[1] < 0 || move[1] > 7)){
            return;
        } else {
            validMoves.push(move);
        }
    });

    return validMoves;
}

function knightMoves(start, end){
    let queue = [[start]];
    let visited = new Set();

    while (queue.length !== 0){
        let currentPath = queue.shift();
        let currentPosition = currentPath[currentPath.length - 1];

        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]){
            return output(currentPath);
        }

        let moves = getValidMoves(currentPosition);

        moves.forEach(move => {
            let moveString = move.toString();

            if (!visited.has(moveString)){
                visited.add(moveString);

                queue.push([...currentPath, move]);
            }
        })
    }
}

function output(path){
    console.log (`You made it in ${path.length - 1} moves! Here's your path:` );
    path.forEach(arr => {
        console.log(`[${arr[0]}, ${arr[1]}]`);
    });
}

console.log(knightMoves([3,3], [4,3]));