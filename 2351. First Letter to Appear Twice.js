 
var repeatedCharacter = function(s) {
    let map = new Map()
    for(let j=0; j<s.length; j++){
        map.set(s[j], (map.get(s[j])||0) +1)
        if(map.get(s[j]) === 2 ){
            return s[j]
        }
    }

};