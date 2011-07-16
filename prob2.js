function fibseq()
{
var firstSet = 0;
var secSet = 1;
var thirdSet = 0;
var result = 0;
var sequence = [firstSet];
while (thirdSet<4000000)
    {
	thirdSet=firstSet+secSet;
		if(thirdSet>4000000)
			break;
		
		if(thirdSet % 2 === 0)
			result=result + thirdSet;
			document.write(sequence.push(thirdSet) + "<br />");
		
	firstSet=secSet;
	secSet=thirdSet;
	}
alert(result);
}
