const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];

console.log(
    numbers
		.filter(value => value>0)
    	.reduce((total, value) => total + value, 0)
);



/*
numbers
    .filter(value => {
        if(value>0)ans+=value;
    })

console.log(ans);
*/
