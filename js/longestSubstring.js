// Ispired by "JavaScript interview with a Google engineer"
// published by "interviewing.io"
// on youtube "https://www.youtube.com/watch?v=10WnvBk9sZc"

// Author:	Luca Leon Happel
// Date:	25.09.2019
// Time:	finished the task in ~45 minutes (testing all possible values included)

a = "ABAZDC"
b = "BACBAD"

c = "AGGTAB"
d = "GXTXAYB"

e = "aaaa"
f = "aa"

g = ""
h = "..."

i = "ABBA"
j = "ABCABA"


const cs = (x,y) => {
	if(!x.length || !y.length)
		return "";
	if(y.indexOf(x[0])!=-1)
		return x[0] + cs( x.slice(1), y.length>0? y.slice(y.indexOf(x[0])+1):""  );
	else
		return cs( x.slice(1), y )
}

const lcs = (x,y) => Array.from(x)
	.map( (e,i) => x.slice( i ) )
	.map( e => cs( e,y ) )
	.reduce( (a,c) => a.length>c.length?a:c , "" )
