const input = "abc axbg1cgddwc"
const input1 = "abc abc"
const input2 = "a a"
const input3 = "aaa aa"
const input4 = "ax1c4 adsgfdgdsxnhghjfd4561fhgfgsdfscdhjytjtyj4a"


function subsequence(input) {
	let result = input.split(" ")
   	let arr1 = result.shift()		
   	let arr2 = result.pop()

   	for(let i = 0; i < arr1.length; i++) {
   		for(let j = 0; j < arr2.length; j++){
   			if(arr1[i] === arr2[j]){
   				result.push(arr1[i])
   				arr2 = arr2.slice(j+1,arr2.length)
   				break;
   			}	
   		}
   	}
    if(result.length === arr1.length && arr1.length >= arr2.length){	
    	result = 1;
    } else {
    	result = 0
    }
    return result


}


