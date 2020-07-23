const btnCreate = $('.j-btn-create');
const btnReplace = $('.j-btn-replace');
const textMain = $('.j-text');
const var1Field = $('.j-var1');
const var2Field = $('.j-var2');
const var3Field = $('.j-var3');
const var4Field = $('.j-var4');
const var5Field = $('.j-var5');
const var6Field = $('.j-var6');
const speachField = $('.j-speach');	


const startProject =
	{"text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"]};

btnCreate.click(function() 
{
textMain.html(startProject.text);
})

btnReplace.click(function() 
{
	const var1 = var1Field.val();
	const var2 = var2Field.val();
	const var3 = var3Field.val();
	const var4 = var4Field.val();
	const var5 = var5Field.val();
	const var6 = var6Field.val();
	const speach = speachField.val();



const newProject =
	{"text":[`Жили-были ${var1} да ${var2}`,`Была у них ${var3}`,`Снесла ${var3} ${var4}, не простое - золотое`,`- ${var1} бил, бил - не разбил`,`- ${var2} била, била - не разбила`,`${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,`${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,`${speach}`]};

textMain.html(newProject.text);

})